export const blogPosts = [
  {
    id: "post-1",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt:
      "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    content: `<article className="prose max-w-none">
  <h2 className="text-3xl font-bold mb-4">Building Responsive UIs with Tailwind CSS</h2>
  <p className="text-base font-normal mb-6">
    Tailwind CSS has transformed how developers create responsive and beautiful user interfaces. With its utility-first approach, building adaptive layouts becomes efficient and highly customizable without writing traditional CSS.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Why Choose Tailwind CSS for Responsive Design?</h3>
  <p className="text-base font-normal mb-4">
    Tailwind CSS offers a responsive design system out of the box. By leveraging its mobile-first breakpoints and utility classes, developers can craft layouts that work seamlessly across devices.
  </p>
  <ul className="list-disc ml-6 space-y-2 text-base">
    <li><strong className="font-semibold">Utility-first:</strong> Each class does one job, making your HTML expressive and focused.</li>
    <li><strong className="font-semibold">Customizable breakpoints:</strong> Tailwind allows you to define breakpoints that suit your needs.</li>
    <li><strong className="font-semibold">Consistency:</strong> Shared utility classes help maintain visual consistency throughout the project.</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Understanding Tailwind's Breakpoints</h3>
  <p className="text-base font-normal mb-4">
    Tailwind follows a mobile-first approach, meaning styles apply to small screens by default and scale up for larger screens using prefixes like <code className="bg-gray-100 px-1 rounded">sm:</code>, <code className="bg-gray-100 px-1 rounded">md:</code>, <code className="bg-gray-100 px-1 rounded">lg:</code>, and <code className="bg-gray-100 px-1 rounded">xl:</code>.
  </p>

  <h4 className="text-xl font-medium mt-6 mb-2">Example:</h4>
  <pre className="bg-gray-100 p-4 rounded mb-6 text-sm overflow-x-auto">
    <code>
      &lt;div class="p-4 sm:p-6 md:p-8 lg:p-10"&gt;<br />
      &nbsp;&nbsp;Responsive padding based on screen size<br />
      &lt;/div&gt;
    </code>
  </pre>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Tips for Building Responsive Layouts</h3>
  <ol className="list-decimal ml-6 space-y-2 text-base">
    <li><strong className="font-semibold">Start with mobile:</strong> Build your base layout without breakpoints and scale up.</li>
    <li><strong className="font-semibold">Use spacing utilities:</strong> Tailwind offers consistent margin and padding classes for all devices.</li>
    <li><strong className="font-semibold">Test frequently:</strong> Check your UI across screen sizes as you build.</li>
  </ol>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Common Responsive Components</h3>
  <p className="text-base font-normal mb-4">
    Tailwind makes it easy to build responsive:
  </p>
  <ul className="list-disc ml-6 space-y-2 text-base">
    <li>Navigation bars with collapsing menus</li>
    <li>Cards and grids that rearrange based on screen size</li>
    <li>Flexible forms and buttons that scale appropriately</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h3>
  <p className="text-base font-normal mb-6">
    With Tailwind CSS, creating responsive user interfaces has never been more intuitive. Its utility-first system and mobile-first design approach allow you to develop scalable and maintainable UI components quickly. Start using Tailwind in your next project and experience the difference it brings to your development workflow.
  </p>

  <p className="text-sm font-light text-gray-500">Written by Anumeet Kumar – March 15, 2023 · 5 min read</p>
</article>
`,
    image: "/blogs/tailwind.webp",
    date: "November 15, 2023",
    readTime: "5 min read",
    category: "CSS",
    author: "Anumeet Kumar",
  },
  {
    id: "post-2",
    title: "State Management in React: Context API vs. Redux",
    excerpt:
      "A comparison of different state management approaches in React applications.",
    content: `<article className="prose max-w-none">
  <h2 className="text-3xl font-bold mb-4">State Management in React: Context API vs. Redux</h2>
  
  <p className="text-base font-normal mb-6">
    In modern React development, managing state efficiently is crucial for building scalable and maintainable applications. Two of the most popular approaches for managing state in React are the <strong className="font-semibold">Context API</strong> and <strong className="font-semibold">Redux</strong>. In this article, we’ll explore the differences, use-cases, and performance implications of both options to help you choose the right one for your project.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">What is the Context API?</h3>
  <p className="text-base font-normal mb-4">
    The Context API is a built-in feature of React that allows data to be passed through the component tree without having to pass props down manually at every level. It's ideal for lightweight state sharing like themes, user authentication, and preferences.
  </p>

  <h4 className="text-xl font-medium mt-6 mb-2">Pros of Context API</h4>
  <ul className="list-disc ml-6 space-y-2 text-base">
    <li>Native to React – no external libraries required</li>
    <li>Great for small to medium applications</li>
    <li>Simple to implement and understand</li>
  </ul>

  <h4 className="text-xl font-medium mt-6 mb-2">Cons of Context API</h4>
  <ul className="list-disc ml-6 space-y-2 text-base">
    <li>Not optimized for frequent updates</li>
    <li>Can lead to unnecessary re-renders</li>
    <li>Limited debugging tools</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-8 mb-4">What is Redux?</h3>
  <p className="text-base font-normal mb-4">
    Redux is a popular state management library that provides a centralized store for your application’s state. It follows a strict unidirectional data flow and is often used in large-scale React applications.
  </p>

  <h4 className="text-xl font-medium mt-6 mb-2">Pros of Redux</h4>
  <ul className="list-disc ml-6 space-y-2 text-base">
    <li>Excellent for complex state management</li>
    <li>Predictable state through a single source of truth</li>
    <li>Rich ecosystem and robust developer tools</li>
  </ul>

  <h4 className="text-xl font-medium mt-6 mb-2">Cons of Redux</h4>
  <ul className="list-disc ml-6 space-y-2 text-base">
    <li>Requires more boilerplate compared to Context API</li>
    <li>Can be overwhelming for small apps or beginners</li>
    <li>Needs external packages (e.g., redux, react-redux)</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-8 mb-4">When to Use Which?</h3>
  <p className="text-base font-normal mb-4">
    Choosing between Context API and Redux depends on your project’s needs. Here’s a quick comparison:
  </p>

  <table className="table-auto w-full border-collapse text-base mb-6">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-4 py-2 text-left font-semibold">Feature</th>
        <th className="border px-4 py-2 text-left font-semibold">Context API</th>
        <th className="border px-4 py-2 text-left font-semibold">Redux</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">Setup</td>
        <td className="border px-4 py-2">Minimal</td>
        <td className="border px-4 py-2">Verbose</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Best For</td>
        <td className="border px-4 py-2">Small/Medium apps</td>
        <td className="border px-4 py-2">Large/Complex apps</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Dev Tools</td>
        <td className="border px-4 py-2">Basic</td>
        <td className="border px-4 py-2">Advanced</td>
      </tr>
    </tbody>
  </table>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h3>
  <p className="text-base font-normal mb-6">
    Both the Context API and Redux have their strengths. If your app is relatively small and you don’t expect a lot of shared state, the Context API is a great choice. For more complex applications where state needs to be shared and manipulated across many components, Redux may be the better option. Ultimately, the right tool depends on your specific project requirements.
  </p>

  <p className="text-sm font-light text-gray-500">Written by Anumeet Kumar – February 28, 2023 · 8 min read</p>
</article>
`,
    image: "/blogs/state.webp",
    date: "February 28, 2023",
    readTime: "8 min read",
    category: "React",
    author: "Anumeet Kumar",
  },
  {
    id: "post-3",
    title: "Getting Started with Next.js and TypeScript",
    excerpt:
      "A comprehensive guide to setting up a new project with Next.js and TypeScript.",
    content: `<article className="prose max-w-none">
  <h2 className="text-3xl font-bold mb-4">Getting Started with Next.js and TypeScript</h2>

  <p className="text-base font-normal mb-6">
    Combining <strong className="font-semibold">Next.js</strong> with <strong className="font-semibold">TypeScript</strong> allows you to build robust, scalable, and type-safe React applications. This guide walks you through setting up a new project with these technologies from scratch.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Why Next.js with TypeScript?</h3>
  <ul className="list-disc ml-6 space-y-2 text-base">
    <li><strong>Next.js</strong> offers server-side rendering, static site generation, and a built-in routing system.</li>
    <li><strong>TypeScript</strong> adds static typing to JavaScript, helping catch errors during development.</li>
    <li>Together, they improve productivity and code maintainability.</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Step 1: Create a New Next.js App</h3>
  <p className="text-base font-normal mb-4">
    Use the official Next.js CLI to create a new project with TypeScript support:
  </p>
  <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto"><code>npx create-next-app@latest my-next-ts-app --typescript</code></pre>

  <h4 className="text-xl font-medium mt-6 mb-2">Folder Structure</h4>
  <p className="text-base font-normal mb-4">
    The project will be initialized with a basic structure:
  </p>
  <ul className="list-disc ml-6 space-y-2 text-base">
    <li><code>/pages</code> – Contains your routes</li>
    <li><code>/public</code> – Static assets</li>
    <li><code>/styles</code> – CSS files</li>
    <li><code>tsconfig.json</code> – TypeScript configuration</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Step 2: Customize TypeScript Configuration</h3>
  <p className="text-base font-normal mb-4">
    Modify <code>tsconfig.json</code> to suit your project’s needs. Here’s a basic example:
  </p>
  <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto"><code>{
  "compilerOptions": {
    "target": "es6",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}</code></pre>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Step 3: Create Your First Component</h3>
  <p className="text-base font-normal mb-4">
    Let’s create a simple component using TypeScript:
  </p>
  <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto"><code>type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) =&gt; {
  return &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;
};

export default Greeting;</code></pre>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Step 4: Run the Development Server</h3>
  <p className="text-base font-normal mb-4">
    Start your development server using:
  </p>
  <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto"><code>npm run dev</code></pre>
  <p className="text-base font-normal mb-4">
    Visit <a href="http://localhost:3000" className="text-blue-600 underline">http://localhost:3000</a> to view your app.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h3>
  <p className="text-base font-normal mb-6">
    Setting up Next.js with TypeScript is straightforward and beneficial for building robust, type-safe React applications. Whether you're building static websites or complex server-rendered apps, this stack is a great choice for modern web development.
  </p>

  <p className="text-sm font-light text-gray-500">Written by Anumeet Kumar – January 12, 2023 · 6 min read</p>
</article>
`,
    image: "/blogs/next.webp",
    date: "January 12, 2023",
    readTime: "6 min read",
    category: "Next.js",
    author: "Anumeet Kumar",
  },
  {
    id: "post-4",
    title: "Optimizing Performance in React Applications",
    excerpt:
      "Learn techniques to improve the performance of your React applications and provide a better user experience.",
    content: `<article className="prose max-w-none">
  <h2 className="text-3xl font-bold mb-4">Optimizing Performance in React Applications</h2>

  <p className="text-base font-normal mb-6">
    Performance is critical when it comes to delivering a seamless user experience. In this article, we explore proven strategies to optimize your React application for speed and responsiveness.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Why Performance Optimization Matters</h3>
  <p className="text-base font-normal mb-4">
    A faster application leads to higher user satisfaction, better retention rates, and improved SEO. Optimizing performance is not just about speed — it's about building scalable and efficient applications.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">1. Use React.memo and PureComponent</h3>
  <p className="text-base font-normal mb-4">
    <code>React.memo</code> and <code>PureComponent</code> help prevent unnecessary re-renders by doing shallow prop comparisons.
  </p>
  <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto">
<code>const MyComponent = React.memo(function MyComponent(props) {
  return &lt;div&gt;{props.title}&lt;/div&gt;;
});</code></pre>

  <h3 className="text-2xl font-semibold mt-8 mb-4">2. Lazy Loading Components</h3>
  <p className="text-base font-normal mb-4">
    Load components only when needed using <code>React.lazy</code> and <code>Suspense</code> to reduce initial load time.
  </p>
  <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto">
<code>const LazyComponent = React.lazy(() =&gt; import('./LazyComponent'));

&lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
  &lt;LazyComponent /&gt;
&lt;/Suspense&gt;</code></pre>

  <h3 className="text-2xl font-semibold mt-8 mb-4">3. Code Splitting</h3>
  <p className="text-base font-normal mb-4">
    Use tools like Webpack and dynamic <code>import()</code> to split your codebase and serve only the required bundles.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">4. Optimize Images and Assets</h3>
  <ul className="list-disc ml-6 space-y-2 text-base">
    <li>Use modern formats like WebP for images.</li>
    <li>Leverage Next.js built-in image optimization when possible.</li>
    <li>Compress and resize images appropriately.</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-8 mb-4">5. Avoid Inline Functions in JSX</h3>
  <p className="text-base font-normal mb-4">
    Inline functions can cause unnecessary re-renders. Move them outside the JSX when possible:
  </p>
  <pre className="bg-gray-100 rounded p-4 text-sm overflow-auto">
<code>const handleClick = () =&gt; {
  console.log("Clicked!");
};

return &lt;button onClick={handleClick}&gt;Click Me&lt;/button&gt;;</code></pre>

  <h3 className="text-2xl font-semibold mt-8 mb-4">6. Use useCallback and useMemo</h3>
  <p className="text-base font-normal mb-4">
    These hooks memoize functions and values to prevent unnecessary recalculations and renders.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">7. Minimize Reconciliation</h3>
  <p className="text-base font-normal mb-4">
    Use keys effectively, avoid deep prop chains, and flatten component trees when appropriate to make reconciliation faster.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">8. Monitor and Analyze</h3>
  <p className="text-base font-normal mb-4">
    Use tools like React DevTools Profiler, Lighthouse, and Chrome DevTools to audit and improve your app’s performance.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h3>
  <p className="text-base font-normal mb-6">
    Performance optimization is an ongoing process. By applying the above strategies, you’ll ensure your React application is fast, responsive, and enjoyable to use.
  </p>

  <p className="text-sm font-light text-gray-500">Written by Anumeet Kumar – December 5, 2022 · 7 min read</p>
</article>
`,
    image: "/blogs/performance.webp",
    date: "December 5, 2022",
    readTime: "7 min read",
    category: "Performance",
  },
  {
    id: "post-6",
    title: "Building Accessible Web Applications",
    excerpt:
      "Best practices for creating web applications that are accessible to all users, including those with disabilities.",
    content: `<article className="prose max-w-none">
  <h2 className="text-3xl font-bold mb-4">Building Accessible Web Applications</h2>

  <p className="text-base font-normal mb-6">
    Accessibility is an essential aspect of modern web development. In this article, we'll explore best practices to ensure your applications are usable by everyone, including individuals with disabilities.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">What is Web Accessibility?</h3>
  <p className="text-base font-normal mb-4">
    Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. This includes those who have visual, auditory, motor, or cognitive impairments.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Why Accessibility Matters</h3>
  <ul className="list-disc ml-6 space-y-2 text-base">
    <li>Expands your audience reach to include people with disabilities.</li>
    <li>Improves SEO and overall site usability.</li>
    <li>Complies with legal requirements in many regions.</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-8 mb-4">1. Use Semantic HTML</h3>
  <p className="text-base font-normal mb-4">
    Semantic tags such as <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;footer&gt;</code> help screen readers and assistive technologies understand the layout and structure of your web pages.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">2. Provide Text Alternatives</h3>
  <p className="text-base font-normal mb-4">
    Use <code>alt</code> attributes on images to describe their content. For icons or decorative images, use an empty <code>alt=""</code> to skip them for screen readers.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">3. Ensure Keyboard Navigation</h3>
  <p className="text-base font-normal mb-4">
    Make sure all interactive elements like buttons, links, and form fields are accessible via keyboard. Use logical tab ordering and highlight focus states.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">4. Use ARIA Roles When Necessary</h3>
  <p className="text-base font-normal mb-4">
    ARIA (Accessible Rich Internet Applications) roles, properties, and states can enhance accessibility, especially for dynamic content. Use them carefully and only when semantic HTML doesn't suffice.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">5. Test with Screen Readers</h3>
  <p className="text-base font-normal mb-4">
    Use tools like NVDA, JAWS, or VoiceOver to experience your site the way a screen reader user would. This helps you identify areas that might be confusing or inaccessible.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">6. Maintain Sufficient Color Contrast</h3>
  <p className="text-base font-normal mb-4">
    Use high contrast between text and background to ensure readability. Tools like the WebAIM Color Contrast Checker can help validate this.
  </p>

  <h3 className="text-2xl font-semibold mt-8 mb-4">7. Form Accessibility</h3>
  <ul className="list-disc ml-6 space-y-2 text-base">
    <li>Label each input clearly with <code>&lt;label&gt;</code> elements.</li>
    <li>Provide helpful error messages and use <code>aria-describedby</code> for additional context.</li>
    <li>Group related fields with <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code>.</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h3>
  <p className="text-base font-normal mb-6">
    Making your web applications accessible is a crucial responsibility for developers. It not only improves the experience for users with disabilities but also benefits all users by promoting clarity, usability, and inclusiveness.
  </p>

  <p className="text-sm font-light text-gray-500">Written by Anumeet Kumar – October 22, 2022 · 6 min read</p>
</article>
`,
    image: "/blogs/web.webp",
    date: "October 22, 2022",
    readTime: "6 min read",
    category: "Accessibility",
    author: "Anumeet Kumar",
  },
];
