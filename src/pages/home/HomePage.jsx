import { Hero } from "./Hero";
import { About } from "./About";
import { Order } from "./Order";
import { Categories } from "./Categories";
import { News } from "./News";
import { Documents } from "./Documents";

export function HomePage() {
    return (
        <div>
            <Hero />
            <About />
            <Categories />
            <Order />
            <News />
            <Documents/>
        </div>
    );
}
