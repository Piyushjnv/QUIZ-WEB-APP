import React from 'react'
import redirect from '/share.png'
import History from '../History/History'
import { useNavigate } from 'react-router-dom'
function Footer() {
 const navigate = useNavigate()
  return (
    <div className=' w-full h-35 bottom-0  bg-slate-900 text-slate-300 font-sans border-t border-slate-800'>
      
        {/* <div className=' bottom-0 absolute  justify-center'><Logoutuser /> </div> */}
         <div className="flex flex-col   justify-center items-center gap-4 text-xs text-slate-500">
        
          
        {/* Elegant placement for Logout */}
          {/* <div className="mt-5 h-15 items-center bg-slate-800 hover:bg-slate-700/80 transition-all rounded-lg px-1 py-2 border border-slate-700/50">
             <Logoutuser />
           </div> */}
           <div className='flex mt-5 items-center gap-1 hover:bg-gray-400 text-[15px] hover:text-gray-900'>
            <a target='blank' href="https://piyush-kumar-woad.vercel.app/about"> <span>Meet Developer</span> <img src={redirect} width={14} height={14} className='ml-1 inline' alt="Redirect" /></a>
           </div>
            <div onClick={()=> navigate('/history')} className='flex mt-5 items-center gap-1 bg-gray-100 font-bold text-[15px] hover:text-gray-900 p-1 rounded  cursor-pointer'>
             {/* &copy; {new Date().getFullYear()} . All rights reserved. */}
             History
          </div>
         </div>

    </div>
  )
}

export default Footer

// function Footer() {
//   return (
//     <footer className="w-full bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
//       <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        
//         {/* Top Section: Grid Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          
//           {/* Column 1: Brand/About */}
//           <div className="flex flex-col gap-3">
//             <h2 className="text-xl font-bold text-white tracking-wide">AppName</h2>
//             <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
//               A modern platform designed to make your experience seamless and efficient. Built with precision and care.
//             </p>
//           </div>

//           {/* Column 2: Quick Links (Placeholders) */}
//           <div>
//             <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h3>
//             <ul className="space-y-2 text-sm">
//               <li><a href="#home" className="hover:text-blue-400 transition-colors duration-200">Home</a></li>
//               <li><a href="#features" className="hover:text-blue-400 transition-colors duration-200">Features</a></li>
//               <li><a href="#about" className="hover:text-blue-400 transition-colors duration-200">About Us</a></li>
//             </ul>
//           </div>

//           {/* Column 3: Resources (Placeholders) */}
//           <div>
//             <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
//             <ul className="space-y-2 text-sm">
//               <li><a href="#docs" className="hover:text-blue-400 transition-colors duration-200">Documentation</a></li>
//               <li><a href="#help" className="hover:text-blue-400 transition-colors duration-200">Help Center</a></li>
//               <li><a href="#privacy" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</a></li>
//             </ul>
//           </div>

//           {/* Column 4: Socials or Newsletter Placeholder */}
//           <div>
//             <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Stay Connected</h3>
//             <div className="flex gap-4 text-sm text-slate-400">
//               {/* You can replace these with actual React Icons later */}
//               <a href="#" className="hover:text-white transition-colors">Twitter</a>
//               <a href="#" className="hover:text-white transition-colors">GitHub</a>
//               <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
//             </div>
//           </div>

//         </div>

//         {/* Divider */}
//         <div className="border-t border-slate-800 my-6"></div>

//         {/* Bottom Section: Footer Utility Bar */}
//        

//       </div>
//     </footer>
//   );
// }

// export default Footer;