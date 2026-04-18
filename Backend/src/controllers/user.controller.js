import User from "../models/User.model.js";

export const registerUser = async (req, res , next) => {
    try {
        const { username, email, fullname, password } = req.body;
        // Check if user already exists
        const existingUser = await User.findOne({
            $or: [{ username }, { email }]
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User with this username or email already exists"
            });
        }

        const refreshToken = user.generateRefreshToken();
        // Create new user
        const user = new User({
            username,
            email,
            fullname,
            password, // Password will be hashed by the pre-save middleware
            refreshToken
        });

        // Save user to database
        const savedUser = await user.save();

        // Return user data (excluding password)
        const userResponse = {
            _id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email,
            fullname: savedUser.fullname,
            avatar: savedUser.avatar,
            createdAt: savedUser.createdAt
        };

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: userResponse
        });

    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // Check password
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // Generate tokens (you'll need to implement this)
        // const { accessToken, refreshToken } = await generateTokens(user);

        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                fullname: user.fullname,
                avatar: user.avatar
            }
            // accessToken,

            // refreshToken
        });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};