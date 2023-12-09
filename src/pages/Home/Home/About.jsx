const About = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <h1 className="text-center text-5xl text-red-700 font-bold">----:About Our Management System:----</h1>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            
          <h2 className="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white"> Empowering Efficiency and Transparency

</h2>
          <p className="mb-4">Our Asset Management System, rooted in the dynamic landscape of modern organizations, is a beacon of innovation. Built on the robust MERN stack, it seamlessly manages the entire lifecycle of organizational assets. From procurement to return, the system ensures transparent and traceable end-to-end asset tracking.
<br />
Key Features: <br />

User-Friendly Interface: Tailored for diverse technical backgrounds, our intuitive interface makes asset management accessible to all.

Responsive Design: Ensuring a consistent user experience across devices, the system adapts to desktops, tablets, and mobile devices.

Employee Empowerment: A personalized dashboard empowers employees to request, monitor, and manage assets with custom options for specific needs.

HR/Admin Capabilities: Comprehensive tools for managing teams, overseeing asset distribution, and gaining insights through detailed reporting, with added security through JWT authentication.

Insightful Reporting: Detailed reports aid decision-making, providing visibility into pending requests and a visually informative pie chart illustrating asset statistics.

Bonus Features:</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
          <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
        </div>
      </div>
    </section>
    );
};

export default About;