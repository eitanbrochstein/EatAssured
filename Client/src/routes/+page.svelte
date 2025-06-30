<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import { onMount } from 'svelte';
    import jQuery from 'jquery';
    import Footer from '$lib/components/Footer.svelte';

    interface Testimonial {
        Person: string;
        Testimonial: string;
    }

    const testimonials: Testimonial[] = [
        {
            Person: 'Guy 1',
            Testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore saepe labore repellat repellendus eum? Cupiditate iusto fugit doloremque voluptas repellendus quisquam quae pariatur hic qui id accusamus, ipsam dolores quos.'
        },
        {
            Person: 'Guy 2',
            Testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore saepe labore repellat repellendus eum? Cupiditate iusto fugit doloremque voluptas repellendus quisquam quae pariatur hic qui id accusamus, ipsam dolores quos.'
        },
        {
            Person: 'Guy 3',
            Testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore saepe labore repellat repellendus eum? Cupiditate iusto fugit doloremque voluptas repellendus quisquam quae pariatur hic qui id accusamus, ipsam dolores quos.'
        },
        {
            Person: 'Guy 4',
            Testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore saepe labore repellat repellendus eum? Cupiditate iusto fugit doloremque voluptas repellendus quisquam quae pariatur hic qui id accusamus, ipsam dolores quos.'
        },
        {
            Person: 'Guy 5',
            Testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore saepe labore repellat repellendus eum? Cupiditate iusto fugit doloremque voluptas repellendus quisquam quae pariatur hic qui id accusamus, ipsam dolores quos.'
        },
        {
            Person: 'Guy 6',
            Testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore saepe labore repellat repellendus eum? Cupiditate iusto fugit doloremque voluptas repellendus quisquam quae pariatur hic qui id accusamus, ipsam dolores quos.'
        }
    ];

    onMount(() => {
        const outerCircle = document.getElementById('about-outer-circle') as HTMLDivElement;
        const innerCircle = document.getElementById('about-inner-circle') as HTMLDivElement;

        function percentageCircle(percentage: number, interval: number) {
            let per = 0;
            const animation = setInterval(() => {
                per += Math.sin(1 - per / 100) * (1.5 * interval);
                outerCircle.style = `background: conic-gradient(#adebb3 ${Math.min(percentage * 3.6, per * 3.6)}deg, white 0deg);`;
                if (Math.min(percentage * 3.6, per * 3.6) >= percentage * 3.6) {
                    clearInterval(animation);
                }
            }, 0);
        }

        function isScrolledIntoView(elem: HTMLElement) {
            var docViewTop = jQuery(window).scrollTop()!;
            var docViewBottom = docViewTop! + jQuery(window).height()!;

            var elemTop = jQuery(elem).offset()!.top;

            return elemTop <= docViewBottom && elemTop >= docViewTop!;
        }

        const waitForScroll = setInterval(() => {
            if (isScrolledIntoView(outerCircle)) {
                percentageCircle(75, 0.4);
                clearInterval(waitForScroll);
            }
        });
    });
</script>

<svelte:head>
    <title>Eat Assured - Eat Without A Worry of Allergies</title>
</svelte:head>

<main>
    <Navbar></Navbar>
    <section class="flex h-[100vh] flex-col items-center justify-center overflow-hidden overflow-hidden bg-cover bg-no-repeat p-12" style="background-image: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(0,0,0,0.7)), url(/images/frontbg.png); background-position: center;">
        <div class="mb-2 flex items-center space-x-4">
            <img src="/images/favicon.png" class="pb-full w-[6rem] max-sm:w-[4rem]" alt="Logo" />
            <h1 class="font-merienda text-center text-[3rem] tracking-wide text-white uppercase max-sm:text-[1.7rem]">Eat <b>Assured</b></h1>
        </div>
        <h2 class="font-merienda text-mint mb-4 w-[70%] text-center text-[4rem] font-semibold max-lg:w-[90%] max-lg:text-[3rem] max-md:w-full max-md:text-[2rem]">Crave with complete confidence</h2>
        <p class="font-merienda mb-6 w-[50%] text-center text-2xl text-slate-50 max-lg:w-[70%] max-md:w-[90%]">Easily Scan Items For Quick and Intricate Allergy Details</p>
        <div class="mt-6 flex w-full items-center justify-center max-sm:flex-col max-sm:space-y-4 sm:space-x-4">
            <a href="/download/android" class="bg-mint font-merienda hover:text-mint block w-[11rem] rounded-4xl p-4 text-center text-2xl text-white shadow-white transition-all duration-500 hover:translate-y-[-4px] hover:bg-white hover:shadow-sm"><i class="fa-brands fa-android"></i> Android</a>
            <a href="/download/apple" class="font-merienda block w-[11rem] rounded-4xl bg-black px-6 py-4 text-center text-2xl text-white shadow-white transition-all duration-500 hover:translate-y-[-4px] hover:bg-white hover:text-black hover:shadow-md"><i class="fa-brands fa-apple"></i> Apple</a>
        </div>
    </section>
    <section class="flex flex-col overflow-hidden bg-slate-50 py-20 sm:px-12">
        <h1 class="text-mint font-merienda mb-6 w-full text-center text-6xl uppercase text-shadow-md">About Us</h1>
        <h2 class="font-merienda mb-6 w-full text-center text-3xl text-shadow-md max-sm:p-4">Simple, Useful, and 100% Free Tool</h2>
        <div class="flex items-center justify-around max-lg:flex-wrap max-lg:space-y-6 lg:space-x-6">
            <div class="flex w-[30rem] flex-col items-center justify-center max-lg:w-full">
                <p class="font-merienda w-full text-center text-[1.2rem] max-sm:p-4">Eat Assured is a fast, and simple tool designed to help people with specific allergies to find the safety of the products they're buying. One simple scan, and Eat Assured provides a descriptive layout and description, along with a percentage of the food's rating based on your allergy.<br /><br /> Now you might be thinking, why not just check the ingredients it gives on the box? For some products, you don't need to do that much research into what it has. Some other products, however, may not be clear about whether something is safe for your allergy. An example may be that someone with a gluten allergy finds a product that doesn't label any gluten on their product, but no certificate saying it's gluten-free either.<br /><br /> This sometimes leads the person to read articles on the product to find their answer, and many sources will have mixed answers depending on the source. Eat Assured removes the annoyance of doing all this research, and gives you one quick answer to tell you the most accurate answer of if it's safe or not.</p>
                <a href="/mission" class="font-merienda bg-mint mt-4 rounded-full p-4 text-2xl text-white shadow-green-600 transition-all duration-300 text-shadow-none hover:scale-105 hover:bg-green-600 hover:shadow-md active:scale-95">Read Our Mission ></a>
            </div>
            <div class="flex flex-col items-center bg-gray-200 p-4 max-sm:w-full sm:w-[40rem] sm:rounded-[1.5rem]">
                <div id="about-outer-circle" class="mb-8 flex aspect-square items-center justify-center rounded-full bg-slate-200 max-sm:w-[20rem] sm:w-[30rem]">
                    <div id="about-inner-circle" class="flex aspect-square items-center justify-center rounded-full bg-white bg-cover max-sm:w-[calc(20rem-50px)] sm:w-[calc(30rem-50px)]" style="background-image: linear-gradient(to right bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(/images/cheerios.jpg)">
                        <h2 class="font-merienda text-[3rem] text-green-600">75%</h2>
                    </div>
                </div>
                <h1 class="font-merienda text-3xl">Cheerios Rating</h1>
                <h2 class="font-merienda mb-8">Category: Gluten Free</h2>
                <p class="font-merienda text-center">Short Overview: Overall, Cheerios are generally considered safe. In the past, there was a risk of oats being cross-contaminated with gluten, as reported in 2016. Since then, however, the problem has gotten a lot better, and it's extremely rare to find an over amount of gluten in a package! However, them claiming it's gluten-free doesn't mean it's 100% confirmed by outside research. In a lot of countries, such as Canada, cheerios weren't allowed to label their products as gluten-free due to their problems of cross-contamination.</p>
            </div>
        </div>
    </section>
    <section class="flex flex-col items-center justify-center overflow-hidden bg-gray-200 py-20 sm:px-12">
        <h1 class="font-merienda mb-6 bg-gradient-to-r from-red-700 via-purple-500 to-orange-400 bg-clip-text text-center text-6xl text-transparent uppercase">Eat Assured+</h1>
        <h2 class="font-merienda mb-6 text-center text-3xl text-orange-300 text-shadow-md max-sm:p-4">Our other great products for just $3/month!</h2>
        <div class="mb-12 flex w-full flex-wrap justify-center space-y-4 max-md:flex-wrap">
            <div class="flex flex-col items-center max-lg:w-[50%] max-md:w-full lg:w-[33.3%]">
                <img src="/images/services/health.svg" class="aspect-square w-[10rem] drop-shadow-sm" alt="Health Logo" />
                <h1 class="font-merienda text-center text-lg font-bold text-gray-900">General Healthy Meal Planner</h1>
                <p class="font-merienda mt-2 p-4 text-center text-sm font-semibold text-orange-700">Helps you adapt to a healthier diet that also counts in your allergies & possible ingredients you want to avoid. Create plans that are healthy for you & combat your allergy complications.</p>
                <a href="/plus/healthplanner" class="font-merienda rounded-full bg-[rgb(30,30,30)] px-4 py-3 text-white shadow-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-black/50">Learn More ></a>
            </div>
            <div class="flex flex-col items-center max-lg:w-[50%] max-md:w-full lg:w-[33.3%]">
                <img src="/images/services/grocery.svg" class="aspect-square w-[10rem] drop-shadow-sm" alt="Grocery Logo" />
                <h1 class="font-merienda text-center text-lg font-bold text-gray-900">Recommended Grocery Items & Auto Generation</h1>
                <p class="font-merienda mt-2 p-4 text-center text-sm font-semibold text-orange-700">Automatically recommends you grocery items from foods you've had before, or might like, with infinite amount of lists to store your groceries from any store or any circumstance.</p>
                <a href="/plus/autogroceryitems" class="font-merienda rounded-full bg-[rgb(30,30,30)] px-4 py-3 text-white shadow-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-black/50">Learn More ></a>
            </div>
            <div class="flex flex-col items-center max-lg:w-[50%] max-md:w-full lg:w-[33.3%]">
                <img src="/images/services/travel.svg" class="aspect-square w-[10rem] drop-shadow-sm" alt="Travel Logo" />
                <h1 class="font-merienda text-center text-lg font-bold text-gray-900">Advanced Travel Food Planning</h1>
                <p class="font-merienda mt-2 p-4 text-center text-sm font-semibold text-orange-700">The most reliable source for finding the best restaraunts while traveling for those with allergies. Get a wide list of great places depending on where you're going.</p>
                <a href="/plus/travelplanning" class="font-merienda rounded-full bg-[rgb(30,30,30)] px-4 py-3 text-white shadow-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-black/50">Learn More ></a>
            </div>
            <div class="flex flex-col items-center max-lg:w-[50%] max-md:w-full lg:w-[33.3%]">
                <img src="/images/services/plate.svg" class="aspect-square w-[10rem] drop-shadow-sm" alt="Plate Logo" />
                <h1 class="font-merienda text-center text-lg font-bold text-gray-900">Plate Version Analysis</h1>
                <p class="font-merienda mt-2 p-4 text-center text-sm font-semibold text-orange-700">If you are totally unsure about the safety of what you're eating, you can instead try a plate version analysis. Although not 100% accurate, it may be useful in specific situations.</p>
                <a href="/plus/plateanalysis" class="font-merienda rounded-full bg-[rgb(30,30,30)] px-4 py-3 text-white shadow-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-black/50">Learn More ></a>
            </div>
            <div class="flex flex-col items-center max-lg:w-[50%] max-md:w-full lg:w-[33.3%]">
                <img src="/images/services/recommend.svg" class="aspect-square w-[10rem] drop-shadow-sm" alt="Recommend Logo" />
                <h1 class="font-merienda text-center text-lg font-bold text-gray-900">Predictive Food Recommendations</h1>
                <p class="font-merienda mt-2 p-4 text-center text-sm font-semibold text-orange-700">Eat Assured+ provides one of the best algrorithms to recommend food we'd think you'd love. We do this with the products you search up, things you put on grocery lists, generally high recommend allergy alternatives, etc.</p>
                <a href="/plus/foodrecommendations" class="font-merienda rounded-full bg-[rgb(30,30,30)] px-4 py-3 text-white shadow-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-black/50">Learn More ></a>
            </div>
            <div class="flex flex-col items-center max-lg:w-[50%] max-md:w-full lg:w-[33.3%]">
                <img src="/images/services/community.svg" class="aspect-square w-[10rem] drop-shadow-sm" alt="Community Logo" />
                <h1 class="font-merienda text-center text-lg font-bold text-gray-900">Private Community Groups</h1>
                <p class="font-merienda mt-2 p-4 text-center text-sm font-semibold text-orange-700">Have Access To Talk to those among your allergy ranges for suggestions, questions, and feedback on anything related. Having a community of like-minded people is extremely important for those with allergies.</p>
                <a href="/plus/communitygroups" class="font-merienda rounded-full bg-[rgb(30,30,30)] px-4 py-3 text-white shadow-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-black/50">Learn More ></a>
            </div>
        </div>
        <a href="/plus" class="font-merienda rounded-full bg-linear-to-r from-red-700 via-purple-500 to-orange-400 px-12 py-4 text-3xl text-white transition-all hover:translate-y-[-4px] hover:scale-103 hover:shadow-md active:translate-y-1 active:scale-97 max-sm:text-2xl">Read More ></a>
    </section>
    <section class="flex flex-col items-center justify-center bg-[rgb(30,30,30)] px-12 py-20">
        <h1 class="font-merienda mb-4 text-center text-5xl text-white uppercase max-sm:text-4xl">Testimonials</h1>
        <h2 class="text-mint font-merienda text-center text-2xl capitalize">See What Other People in Our Community Think!</h2>
        <div class="mt-8 flex w-full flex-wrap items-center justify-around md:space-x-0">
            {#each testimonials as testimonial}
                <div class="mb-6 flex h-full w-[32%] flex-col items-center justify-center rounded-[2rem] bg-white p-4 text-center max-xl:w-[45%] max-md:w-[70%] max-sm:w-[100%]">
                    <div class="flex w-full items-center justify-center space-x-6 p-4">
                        <img src="/images/anonymous.jpeg" alt="Person's Profile" class="aspect-square w-[5rem] rounded-full" />
                        <h1 class="font-merienda text-3xl tracking-wide text-green-600">{testimonial.Person}</h1>
                    </div>
                    <p class="font-merienda">"{testimonial.Testimonial}"</p>
                </div>
            {/each}
        </div>
        <div class="mt-4 flex space-x-6 max-sm:flex-col max-sm:space-y-6">
            <a href="/reviews" class="font-merienda bg-mint w-[15rem] rounded-full px-6 py-4 text-center text-3xl text-white shadow-white/50 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-md active:translate-y-[2px]">Our Reviews</a>
            <a href="/rateus" class="font-merienda w-[15rem] rounded-full bg-white px-6 py-4 text-center text-3xl text-green-600 shadow-white/50 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-md active:translate-y-[2px]">Rate Us</a>
        </div>
    </section>
    <Footer></Footer>
</main>
