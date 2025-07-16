<script lang="ts">
    import { onMount } from 'svelte';
    import {isLoggedIn, currentUser} from "../authStore";

    interface NavItem {
        href: string;
        title: string;
    }

    const navItems: NavItem[] = [
        { href: '/products', title: 'Products' },
        { href: '/blog', title: 'Blog' },
        { href: '/mission', title: 'Our Mission' }
    ];

    onMount(() => {
        const mobilenav = document.getElementById('mobile-nav') as HTMLButtonElement;
        const mobilenavscreen = document.getElementById('mobile-nav-screen') as HTMLDivElement;

        let open = false;

        const bar1 = document.getElementById('bar-1') as HTMLElement;
        const bar2 = document.getElementById('bar-2') as HTMLElement;
        const bar3 = document.getElementById('bar-3') as HTMLElement;

        mobilenav.addEventListener('click', () => {
            open = !open;
            if (!open) {
                bar1.classList.remove('bar-open-1');
                bar2.classList.remove('bar-open-2');
                bar3.classList.remove('bar-open-3');
                mobilenavscreen.style = 'height:0; padding: 0;';
            } else {
                bar1.classList.add('bar-open-1');
                bar2.classList.add('bar-open-2');
                bar3.classList.add('bar-open-3');
                mobilenavscreen.style = 'height: 40rem; padding: 5rem 0;';
            }
        });

        const nav = document.getElementById('nav') as HTMLElement;
        const navlogo = document.getElementById('nav-logo') as HTMLImageElement;
        setInterval(() => {
            if (window.scrollY >= 400 || window.innerWidth <= 768) {
                nav.style = 'background-color: white; position: fixed; box-shadow: 0 0.3rem 1rem rgba(0,0,0,0.5);';
                navlogo.src = '/images/icon.png';
                document.querySelectorAll('.nav-item').forEach((e) => {
                    (e as HTMLElement).style = 'color: black;';
                });
            } else {
                nav.style = 'background-color: transparent; position: absolute;';
                navlogo.src = '/images/iconwhite.png';
                document.querySelectorAll('.nav-item').forEach((e) => {
                    (e as HTMLElement).style = 'color: white;';
                });
            }
        }, 1);
    });
</script>

<main id="nav" class="absolute top-0 left-0 z-10 flex h-[8rem] w-full items-center px-8 max-md:px-0 max-md:pl-4 md:bg-white">
    <div class="mr-auto flex h-full items-center">
        <a href="/" class="mr-6 h-full">
            <img src="/images/iconwhite.png" alt="Logo" class="h-full w-[8rem]" id="nav-logo" />
        </a>
        <div class="flex space-x-4 max-md:hidden">
            {#each navItems as navItem}
                <a class="font-merienda nav-item text-xl transition-all hover:text-shadow-md max-lg:text-lg" href={navItem.href}>
                    {navItem.title}
                </a>
            {/each}
        </div>
    </div>
    <div class="ml-auto flex h-full items-center justify-center space-x-4">
        <a href="/login" id="login" class="font-merienda rounded-[2rem] bg-black px-6 py-3 text-center text-2xl text-white shadow-black/50 transition-all hover:translate-y-[-0.25rem] hover:shadow-md active:translate-y-[0.1rem] active:shadow-lg max-lg:text-xl max-sm:hidden">
            {#if $isLoggedIn}
                Log Out
            {:else}
                Log In
            {/if}
        </a>
        <a href="/signup" id="signup" class="font-merienda rounded-[2rem] bg-[#ADEBB3] px-6 py-3 text-center text-2xl text-white transition-all hover:translate-y-[-0.25rem] hover:shadow-md active:translate-y-[0.1rem] active:shadow-lg max-lg:text-xl max-sm:hidden">Sign Up</a>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button id="mobile-nav" class="mobile-polygon ml-4 hidden h-full w-[7rem] items-center justify-center bg-slate-200 text-4xl max-md:flex">
            <div class="inline-block">
                <div class="my-[6px] h-[5px] w-[35px] bg-black transition-all duration-500" id="bar-1"></div>
                <div class="my-[6px] h-[5px] w-[35px] bg-black transition-all duration-500" id="bar-2"></div>
                <div class="my-[6px] h-[5px] w-[35px] bg-black transition-all duration-500" id="bar-3"></div>
            </div>
        </button>
    </div>
    <div id="mobile-nav-screen" class="shdow-black absolute top-[8rem] left-0 z-10 flex w-full flex-col items-center space-y-8 overflow-hidden bg-white whitespace-nowrap shadow-lg transition-all duration-500 md:hidden" style="height:0; padding: 0;">
        <div class="relative flex flex-col items-center space-y-6">
            {#each navItems as navItem}
                <a class="font-merienda nav-item text-3xl transition-all hover:text-shadow-md" href={navItem.href}>
                    {navItem.title}
                </a>
            {/each}
        </div>
        <div class="relative flex flex-col space-y-4">
            <a href="/login" id="login" class="font-merienda rounded-[2rem] bg-black px-6 py-3 text-center text-3xl text-white shadow-black/50 transition-all hover:translate-y-[-0.25rem] hover:shadow-md active:translate-y-[0.1rem] active:shadow-lg sm:hidden">
                Log In
            </a>
            <a href="/signup" id="signup" class="font-merienda bg-mint rounded-[2rem] px-6 py-3 text-center text-3xl text-white transition-all hover:translate-y-[-0.25rem] hover:shadow-md active:translate-y-[0.1rem] active:shadow-lg sm:hidden">Sign Up</a>
        </div>
    </div>
</main>
