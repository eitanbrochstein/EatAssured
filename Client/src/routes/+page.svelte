<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import { onMount } from 'svelte';
    import jQuery from 'jquery';

    let count = 0;
    function updateClick() {
        count++;
    }

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
    <section class="flex h-[100vh] flex-col items-center justify-center overflow-hidden bg-cover bg-no-repeat p-12" style="background-image: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(0,0,0,0.7)), url(/images/frontbg.png); background-position: center;">
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
                <p class="font-merienda text-center">Short Overview: Overall, Cheerios are generally considered safe. In the past, there was a risk of oats being cross-contaminated with gluten, as reported in 2016. Since then, however, the problem has gotten a lot better, and it's extremely rare to find an over amount of gluten in a package! However, their claiming it's gluten-free doesn't mean it's 100% confirmed by outside research. In a lot of countries, such as Canada, cheerios weren't allowed to label their products as gluten-free due to their problems of cross-contamination.</p>
            </div>
        </div>
    </section>
    <section class="flex flex-col bg-slate-50 py-20 sm:px-12">
        <h1 class="text-mint font-merienda mb-6 w-full text-center text-6xl uppercase">Eat Assured+</h1>
        <h2 class="font-merienda mb-6 w-full text-center text-3xl text-shadow-md max-sm:p-4">Our other great products for just $3/month!</h2>
        <div class="flex w-full flex-wrap items-center justify-center space-y-4">
            <div class="flex w-[33.3%] flex-col items-center justify-center">
                <img src="/images/services/health.svg" class="aspect-square w-[10rem]" alt="Health Logo" />
                <h1 class="font-merienda text-center">General Healthy Meal Planner</h1>
            </div>
            <div class="flex w-[33.3%] flex-col items-center justify-center">
                <img src="/images/services/grocery.svg" class="aspect-square w-[10rem]" alt="Grocery Logo" />
                <h1 class="font-merienda text-center">Recommended Grocery Items & Auto Generation</h1>
            </div>
            <div class="flex w-[33.3%] flex-col items-center justify-center">
                <img src="/images/services/travel.svg" class="aspect-square w-[10rem]" alt="Travel Logo" />
                <h1 class="font-merienda text-center">Advanced Travel Food Planning</h1>
            </div>
            <div class="flex w-[33.3%] flex-col items-center justify-center">
                <img src="/images/services/plate.svg" class="aspect-square w-[10rem]" alt="Plate Logo" />
                <h1 class="font-merienda text-center">Plate Version Analysis</h1>
            </div>
            <div class="flex w-[33.3%] flex-col items-center justify-center">
                <img src="/images/services/recommend.svg" class="aspect-square w-[10rem]" alt="Recommend Logo" />
                <h1 class="font-merienda text-center">Predictive Food Recommendations</h1>
            </div>
            <div class="flex w-[33.3%] flex-col items-center justify-center">
                <img src="/images/services/community.svg" class="aspect-square w-[10rem]" alt="Community Logo" />
                <h1 class="font-merienda text-center">Private Community Groups</h1>
            </div>
        </div>
    </section>
</main>
