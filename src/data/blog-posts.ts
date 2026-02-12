export const blogPosts = [
  {
    title: "How to Set Up React: A Complete Guide for Beginners",
    slug: "setup-react-guide-beginners",
    desc:"",
    date: "2023",
    image: "/create-react.png",
    content: `
      <p class="mb-6 leading-relaxed">
        React is a popular JavaScript library for building interactive user interfaces (UI). If you are a beginner looking to get started with React, this article will provide a step-by-step guide on how to set up React in your development environment.
      </p>

      <h3 class="text-2xl font-serif text-white mb-4 mt-8">Step 1: Install Node.js and npm</h3>
      <p class="mb-6 leading-relaxed">
        The first step is to ensure that you have Node.js and npm (Node Package Manager) installed on your computer. Node.js provides a runtime environment for running JavaScript applications on the server-side or client-side. npm is the default package manager for Node.js used to install modules and dependencies.
      </p>
      <p class="mb-6 leading-relaxed">
        You can download Node.js from their official website at <a href="https://nodejs.org" target="_blank" class="text-primary hover:underline">https://nodejs.org</a>. Follow the installation instructions provided on the website.
      </p>
      <p class="mb-6 leading-relaxed">
        Once the installation is complete, you can verify if Node.js and npm are installed by running the following command in the terminal or command prompt:
      </p>

      <div class="bg-[#1e1e1e] p-4 rounded-lg mb-6 overflow-x-auto border border-white/10">
        <pre><code class="text-sm font-mono text-gray-300">
node -v 
npm -v
        </code></pre>
      </div>

      <p class="mb-6 leading-relaxed">
        Jika versi Node.js dan npm ditampilkan, berarti instalasi berhasil.
      </p>

      <h3 class="text-2xl font-serif text-white mb-4 mt-8">Step 2: Create a React Project</h3>
      <p class="mb-6 leading-relaxed">
        Once you have Node.js and npm installed, the next step is to create a new React project. React provides a command-line tool called create-react-app that helps you create a new React project quickly and easily.
      </p>
      <p class="mb-6 leading-relaxed">
        Open the terminal or command prompt and run the following command to install create-react-app globally:
      </p>

      <div class="bg-[#1e1e1e] p-4 rounded-lg mb-6 overflow-x-auto border border-white/10">
        <pre><code class="text-sm font-mono text-gray-300">
npm install -g create-react-app
        </code></pre>
      </div>

      <p class="mb-6 leading-relaxed">
        After it’s done, you can create a new React project by running the following command:
      </p>

      <div class="bg-[#1e1e1e] p-4 rounded-lg mb-6 overflow-x-auto border border-white/10">
        <pre><code class="text-sm font-mono text-gray-300">
create-react-app project-name
        </code></pre>
      </div>

      <p class="mb-6 leading-relaxed">
        Please replace “project-name” with the desired name for your project. The command above will create a new directory with the specified project name. Next, navigate to the project directory by running the command:
      </p>

      <div class="bg-[#1e1e1e] p-4 rounded-lg mb-6 overflow-x-auto border border-white/10">
        <pre><code class="text-sm font-mono text-gray-300">
cd project-name
        </code></pre>
      </div>

      <h3 class="text-2xl font-serif text-white mb-4 mt-8">Step 3: Running the React Project</h3>
      <p class="mb-6 leading-relaxed">
        After being inside the project directory, you can run the React project by executing the following command:
      </p>

      <div class="bg-[#1e1e1e] p-4 rounded-lg mb-6 overflow-x-auto border border-white/10">
        <pre><code class="text-sm font-mono text-gray-300">
npm start
        </code></pre>
      </div>

      <p class="mb-6 leading-relaxed">
        The above command will compile and run the React project on your local development server. You will see a local URL that you can open in your browser to view your React application.
      </p>
      <p class="mb-6 leading-relaxed">
        Once the project is running, you can make changes to the files in the src directory to see the changes reflected immediately in your browser. Every time you save changes to a file, the development server will automatically refresh the page so you can see the updates.
      </p>

      <h3 class="text-2xl font-serif text-white mb-4 mt-8">Step 4: Start Developing Your React Application</h3>
      <p class="mb-6 leading-relaxed">
        Now, your React project is ready to be used. You can start developing your React application by editing files in the src directory.
      </p>
      <p class="mb-6 leading-relaxed">
        The src/App.js file is the main file that contains the main component of your application. You can modify this component or create new components to start building your application.
      </p>
      <p class="mb-6 leading-relaxed">
        You can also install and use third-party libraries or modules using npm. For example, if you want to use Bootstrap in your project, you can install it by running the following command:
      </p>

      <div class="bg-[#1e1e1e] p-4 rounded-lg mb-6 overflow-x-auto border border-white/10">
        <pre><code class="text-sm font-mono text-gray-300">
npm install react-bootstrap
        </code></pre>
      </div>

      <p class="mb-6 leading-relaxed">
        After the installation is complete, you can import and use Bootstrap components in your application.
      </p>

      <h3 class="text-2xl font-serif text-white mb-4 mt-8">Conclusion</h3>
      <p class="mb-6 leading-relaxed">
        That concludes the complete guide on how to set up React for beginners. By following the steps above, you will be able to create a React project and start developing interactive web applications. Happy coding!
      </p>
      
      <p class="mb-6 text-sm text-gray-400 italic">
        Note: This article assumes you have a basic understanding of JavaScript and web development. If you are still a beginner in this regard, it is recommended to learn the basics of JavaScript and HTML/CSS before getting started with React.
      </p>
    `
  },
  {
    title: "Typescript for beginners.",
    slug: "learned-typescript-last-night",
    desc:"",
    date: "2023",
    image: "/typescript.png",
    content: `
      <p class="mb-6 leading-relaxed">
        I just learned TypeScript last night, even though it’s just the basics. I learned about what TypeScript is, the differences between TypeScript and JavaScript, and how TypeScript works. After learning, I prefer to write about it because, for me, that’s the best way to learn something new. Okay, let’s continue!
      </p>

      <h3 class="text-2xl font-serif text-white mb-4 mt-8">What is TypeScript?</h3>
      <p class="mb-6 leading-relaxed">
        TypeScript is basically JavaScript. TypeScript has all the features of JavaScript, but JavaScript does not have the features of TypeScript. JavaScript uses Dynamic Typing, which means that every variable you write in JavaScript defines its data type automatically. However, in TypeScript, you have to explicitly define the data type if you want to create a variable. This is called Static Typing. For example:
      </p>

      <div class="bg-[#1e1e1e] p-4 rounded-lg mb-6 overflow-x-auto border border-white/10">
        <pre><code class="text-sm font-mono text-gray-300">
//create variable in Javascript 

let a = 1 
let b = 2 

console.log(a+b) 

//print 3
        </code></pre>
      </div>

      <p class="mb-6 leading-relaxed">
        That is an example of Dynamic Typing where you don’t have to declare the data type; you can simply write the variable, and the type is inferred automatically. Dynamic Typing is easier than Static Typing, but writing code like this can lead to some issues. For example:
      </p>

      <div class="bg-[#1e1e1e] p-4 rounded-lg mb-6 overflow-x-auto border border-white/10">
        <pre><code class="text-sm font-mono text-gray-300">
//issue dynamic typing in Javascript 

let a = 2 
let b = true 

console.log(a+b) 

//print 3
        </code></pre>
      </div>

      <p class="mb-6 leading-relaxed">
        Do you see the code above? When a number meets a boolean in JavaScript, JavaScript will treat the boolean as a number. So, when you sum and console log it, it will print 3. You can observe this behavior. However, in TypeScript, this issue will never occur because you explicitly declare the data type. For example:
      </p>

      <div class="bg-[#1e1e1e] p-4 rounded-lg mb-6 overflow-x-auto border border-white/10">
        <pre><code class="text-sm font-mono text-gray-300">
//Create Variable in Typescript 

let a: number = 2 
let b: number = 3 

console.log(a+b); 
//print 5 

let firstName: string = "syahrul" 
let lastName: string = 10 

console.log(firstName + lastName) 
//print ERROR!!
        </code></pre>
      </div>

      <p class="mb-6 leading-relaxed">
        That is an example of Static Typing, where you have to declare the data types for variables. By writing the code like that, it minimizes the occurrence of errors.
      </p>

      <h3 class="text-2xl font-serif text-white mb-4 mt-8">How Typescript Works?</h3>
      <p class="mb-6 leading-relaxed">
        Okay, before we continue with how TypeScript works, let me explain how JavaScript works first. In JavaScript, we typically use console.log to print something to the console without a compiler, allowing you to detect errors at runtime. Unlike JavaScript, TypeScript has a compiler called TSC (TypeScript Compiler) which enables you to detect errors early, before runtime. This is how TypeScript works: you write the code in TypeScript and then compile it. If there are no errors, it will create a JavaScript file. if there are errors it wont create Javascript file.
      </p>

      <div class="bg-[#1e1e1e] p-4 rounded-lg mb-6 border border-white/10 text-center">
        <span class="font-mono text-primary font-bold text-lg">Typescript → TSC → Javascript</span>
      </div>

      <p class="mb-6 leading-relaxed">
        That’s it! In simple conclusion, TypeScript is like JavaScript but with additional features that make JavaScript even better. After writing this, I will continue learning TypeScript, especially focusing on Data Types in TypeScript. I will update it again on Medium. Thanks for reading!
      </p>
    `
  },
  {
    title: "Menjadi The Most Progressive Student di Binar Academy",
    slug: "the-most-progressive-student-binar",
    desc:"",
    date: "28 June 2023",
    image: "/binar-academy.png",
    content: `
      <p class="mb-6 leading-relaxed">
        Rasanya sangat senang bisa graduate di Binar Academy sebagai Fullstack Web Developer setelah lebih dari 6 bulan belajar di Binar bersama Faciliator dan teman-teman yang lain.
      </p>
      
      <h3 class="text-2xl font-serif text-white mb-4 mt-8">Perjalanan Bootcamp</h3>
      <p class="mb-6 leading-relaxed">
        Dalam menjalankan bootcamp ini sebenarnya saya sudah memiliki bekal sedikit dalam dunia programming, tapi saya memutuskan untuk mengikuti bootcamp agar mempertajam skill saya dan memperluas networking dalam tech industri ini. Saya bersyukur keputusan yang saya buat itu ternyata berbuah baik bagi saya, disana saya dapat mengikuti materi yang dibawakan dengan baik walaupun, saya tidak memiliki latar belakang di bidang Tech dan saya adalah Sarjana Ekonomi.
      </p>
      
      <p class="mb-6 leading-relaxed">
        Mengikuti Bootcamp di Binar ini menurut saya cukup menantang dari tugas-tugas yang diberikan dan waktu menyelesaikan tugas yang sangat berdekatan, membuat saya belajar lebih ekstra dan fokus untuk menyelesaikan setiap tugasnya. Alhamdulilah, saya berhasil menyelesaikan tugasnya.
      </p>
      
      <h3 class="text-2xl font-serif text-white mb-4 mt-8">Momen Kelulusan</h3>
      <p class="mb-6 leading-relaxed">
        Long story short, 28 June 2023 waktunya graduation dimana seluruh student Binar di wisuda melalui online. Dimana sebagian student hadir di wisuda itu dan dilakukanlah serangkaian acaranya. Mulai dari sambutan dari CEO Binar Academy, Alamanda Shantika, penjelasan mengenai salah satu fitur Binar yaitu Job Connect, penyebutan siswa-siswa yang lulus di masing-masing kelas & sampailah pada akhirnya pengumuman The Most Progressive Student.
      </p>
      
      <p class="mb-6 leading-relaxed">
        Pada saat pengumuman The Most Progressive Student saya merasa deg-degan walaupun pada awalnya saya nothing to lose dan tidak terlalu berharap mendapat Award ini. Pengemuman dimulai dari kelas Android Engineer *dalem hati deg-degan banget.
      </p>
      
      <h3 class="text-2xl font-serif text-white mb-4 mt-8">Sebuah Kejutan Manis</h3>
      <p class="mb-6 leading-relaxed">
        Lalu berlanjutlah ke pengumuman di kelas Fullstack Web Development dan ternyata nama saya disebut! Saya kaget dan hanya bisa tersenyum senang :D Saya merasa hasil saya belajar dan praktik setiap hari selama 6 bulan lebih tidak sia-sia dan alhamdulilah berbuah manis. Tentu ini menambah motivasi untuk saya, agar bisa lebih baik lagi kedepannya untuk tetap disiplin dan konsisten.
      </p>

      <p class="mb-6 leading-relaxed">
        Oh iya, saya juga ingin mengucapkan terima kasih kepada mentor Mas Maulidan dan teman-teman dari FSW 28 yang selama ini bekerja sama dengan saya dalam menyelesaikan tugas-tugasnya! Terima kasih..
      </p>
      
      <h3 class="text-2xl font-serif text-white mb-4 mt-8">Langkah Selanjutnya</h3>
      <p class="mb-6 leading-relaxed">
        Begitulah kira-kira cerita saya mendapatkan The Most Progressive Student dari Binar Academy. Langkah selanjutnya adalah mendapatkan kerja secepat mungkin dan tetap belajar setiap harinya mengenai programming.
      </p>
    `
  }
];
