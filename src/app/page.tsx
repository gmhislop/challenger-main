import { Book, ListTodo } from "lucide-react";
import { Logo } from "./components/Logo";
import { PopularEvents } from "./components/PopularEvents";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-4 my-8 grid gap-8 lg:grid-cols-2">
      <section className="p-6 bg-[#00131a] bg-opacity-50 rounded-lg backdrop-filter backdrop-blur-lg text-white">
        <div className="mb-4">
          <Logo />
        </div>
        <h1 className="text-3xl font-bold mb-4">Welcome to the TicketSwap Challenger™</h1>
        <p>
          The goal of this challenger is to finish the todo list stated below ✅. If you see anything that can be improved that is not on the todo list, you are welcome to do so 😊.
        </p>
      </section>

      <section className="p-6 bg-[#00131a] bg-opacity-50 rounded-lg backdrop-filter backdrop-blur-lg text-white">
        <ListTodo className="w-12 h-12 mb-4" />
        <h2 className="text-2xl font-bold mb-4">Todo</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>Improvement:</strong> The Challenger should be mobile
            friendly
          </li>
          <li>
            <strong>Bugfix:</strong> There are some browser console errors that
            need to be addressed
          </li>
          <li>
            <strong>Improvement:</strong> The event page need some nice styling
            for a better overview of all the information
          </li>
          <li>
            <strong>Improvement:</strong> The popular events on this page are
            not server side rendered, it would be nice to have that fixed
          </li>
          <li>
            <strong>Bugfix:</strong> There are some issues in dark mode that
            need to be addressed
          </li>
          <li>
            <strong>Story:</strong> As a user I want to be able to navigate to a
            search page and search all the events. I want to see the results and
            be able to navigate to an event.
          </li>
        </ul>
      </section>

      <section className="p-6 bg-[#00131a] bg-opacity-50 rounded-lg backdrop-filter backdrop-blur-lg text-white lg:col-span-full">
        <Book className="w-12 h-12 mb-4" />
        <h2 className="text-2xl font-bold mb-4">References</h2>
        <p className="text-sm">
          Below is a list of references you can use to get started if you have little experience with the tech stack. If you have any questions, feel free to <a className="underline" href="mailto:rob@ticketswap.com">contact us</a> 💪.
        </p>
      </section>

      <section className="p-6 bg-[#00131a] bg-opacity-50 rounded-lg backdrop-filter backdrop-blur-lg text-white lg:col-span-2">
        <PopularEvents />
      </section>

      <footer className="p-6 bg-[#00131a] bg-opacity-50  rounded-lg backdrop-filter backdrop-blur-lg text-white text-center lg:col-span-2">
        <a href="/" className="block">
          <Logo />
        </a>
      </footer>
    </main>
  );
}
