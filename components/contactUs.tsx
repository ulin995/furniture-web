import React from 'react';

const ContactUs = () => {
  return (
    <div className="w-full p-4 mx-auto md:p-8" id="contact_us">
      {/* 顶部内容区域 */}
      <div className="flex flex-col min-[834px]:flex-row min-[834px]:justify-between gap-6 mb-8">
        {/* 左侧标题和简介 */}
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold md:text-4xl text-navy-900">
            Hey! Tell us about your project <span role="img" aria-label="wave">👋</span>
          </h1>
          <p className="mt-4 text-[#333]">
            Nullam erat nisl, ornare quis ex eu, scelerisque suscipit nibh. Morbi facilisis blandit congue.
          </p>
        </div>
        
        {/* 右侧联系信息 */}
        <div className="flex flex-col w-[50%] gap-6 min-[834px]:pl-[20px]">
          {/* Email 部分 */}
          <div className="flex items-center gap-4">
            <div className="bg-[#F3F4FF] p-4 rounded-full shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase">EMAIL ADDRESS</span>
              <span className="text-[#333333]">furniture.elmar@gmail.com</span>
            </div>
          </div>
          
          {/* Phone 部分 */}
          <div className="flex items-center gap-4">
            <div className="bg-[#F3F4FF] p-4 rounded-full shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase">PHONE NUMBER</span>
              <span className="text-[#333333]">416-259-5538</span>
            </div>
          </div>

          {/* Business Hours 部分 */}
          <div className="flex items-center gap-4">
            <div className="bg-[#F3F4FF] p-4 rounded-full shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase">BUSINESS HOURS</span>
              <span className="text-[#333333]">10AM-6PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* 地图和表单区域 - 响应式布局 */}
      <div className="flex flex-col min-[834px]:flex-row gap-8">
        {/* 地图区域 */}
        <div className="w-full min-[834px]:w-1/2 flex max-[834px]:h-[400px]">
          <div className="w-full h-[100%] rounded-lg overflow-hidden">
          <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.6501514921897!2d-79.49470312346586!3d43.61824905561043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47d07fbe5da7%3A0x37df05386d8e0!2s2879A%20Lake%20Shore%20Blvd%20W%2C%20Etobicoke%2C%20ON%20M8V%201J1%2C%20Canada!5e0!3m2!1sen!2sca!4v1709697433099!5m2!1sen!2sca"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* 表单区域 */}
        <div className="w-full min-[834px]:w-1/2 bg-[#FDF8F3] p-6 md:p-8 rounded-xl">
          <h2 className="mb-6 text-2xl font-bold">Write down your quote here...</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  placeholder="Full name"
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input 
                type="text" 
                placeholder="Brand/Company/Product Name"
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Services</label>
                <select className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md">
                  <option>What are looking for?</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Budget</label>
                <select className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md">
                  <option>Project budget (USD)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell us about your project..."
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 text-white transition-colors bg-black rounded-md hover:bg-gray-800"
            >
              Request A Quote →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;