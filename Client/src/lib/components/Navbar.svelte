<script lang="ts">
    import { onMount } from 'svelte';

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
            } else {
                bar1.classList.add('bar-open-1');
                bar2.classList.add('bar-open-2');
                bar3.classList.add('bar-open-3');
            }
        });
    });
</script>

<main class="flex h-[8rem] w-full items-center justify-between bg-slate-50 px-8 max-md:px-0 max-md:pl-4">
    <div class="h-full">
        <a href="/">
            <img src="/images/icon.png" alt="Logo" class="h-full" />
        </a>
    </div>
    <div class="flex items-center justify-center space-x-8 max-lg:space-x-6 max-md:hidden lg:w-[50%]">
        {#each navItems as navItem}
            <a class="font-merienda text-xl max-lg:text-lg" href={navItem.href}>
                {navItem.title}
            </a>
        {/each}
    </div>
    <div class="flex h-full items-center justify-center space-x-4">
        <button id="login" class="font-merienda rounded-[2rem] bg-black px-6 py-3 text-2xl text-white max-lg:text-xl max-sm:hidden hover:translate-y-[-0.25rem] hover:shadow-md active:shadow-lg active:translate-y-[0.1rem] shadow-black/50 transition-all">Log In</button>
        <button id="signup" class="font-merienda rounded-[2rem] bg-[#ADEBB3] px-6 py-3 text-2xl text-white max-lg:text-xl max-sm:hidden hover:translate-y-[-0.25rem] hover:shadow-md transition-all active:shadow-lg active:translate-y-[0.1rem]">Sign Up</button>
        <button id="mobile-nav" class="mobile-polygon ml-4 hidden h-full bg-slate-200 text-4xl max-md:flex w-[7rem] justify-center items-center">
            <div class="inline-block">
                <div class="my-[6px] h-[5px] w-[35px] bg-black transition-all duration-500" id="bar-1"></div>
                <div class="my-[6px] h-[5px] w-[35px] bg-black transition-all duration-500" id="bar-2"></div>
                <div class="my-[6px] h-[5px] w-[35px] bg-black transition-all duration-500" id="bar-3"></div>
            </div>
        </button>
    </div>
</main>
