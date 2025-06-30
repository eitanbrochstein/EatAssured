<script>
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";

</script>

<main>
    <Navbar></Navbar>
    <section class="flex min-h-[100vh] flex-col items-center overflow-hidden bg-cover bg-no-repeat pt-40 py-12" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/frontbg.png); background-position: center;">
        <div class="w-[70%] bg-white rounded-[2rem] flex flex-col justify-center items-center py-16 px-8 max-lg:w-[85%] max-md:w-[95%]">
            <h1 class="font-merienda tracking-wide text-5xl font-bold mb-8 text-center w-full">Sign Up</h1>
            <form action="#" class="h-full w-full flex flex-col items-center">
                <input type="email" id="email" name="email" placeholder="Email" class="w-[70%] py-6 px-4 bg-slate-200 border-transparent focus:border-transparent focus:ring-0 font-merienda text-3xl rounded-full shadow-md mb-8 max-sm:text-xl max-md:w-[85%] max-sm:w-[95%]">
                <input type="text" id="username" name="username" placeholder="Username" class="w-[70%] py-6 px-4 bg-slate-200 border-transparent focus:border-transparent focus:ring-0 font-merienda text-3xl rounded-full shadow-md mb-8 max-sm:text-xl max-md:w-[85%] max-sm:w-[95%]">
                <input type="text" id="password" name="password" placeholder="Password" class="w-[70%] max-md:w-[85%] py-6 px-4 bg-slate-200 border-transparent focus:border-transparent focus:ring-0 font-merienda text-3xl rounded-full shadow-md mb-8 max-sm:text-xl max-sm:w-[95%]">
                <button class="font-merienda bg-mint py-6 text-white text-2xl px-12 rounded-full hover:translate-y-[2px] active:translate-y-[8px] transition-all duration-250 hover:shadow-md mb-4">Submit</button>
                <p class="font-merienda text-2xl pl-4 mb-4 border-t-2 border-slate-300 w-[70%] pt-4 text-center">Or Sign Up With:</p>
                <div class="space-x-4 flex">
                    <a href="#" class="text-green-500 text-2xl w-[3rem] flex justify-center items-center aspect-square bg-slate-200 p-2 rounded-full text-center hover:shadow-md transition-all hover:translate-y-1"><i class="fa-brands fa-google"></i></a>
                    <a href="#" class="text-green-500 text-2xl w-[3rem] flex justify-center items-center aspect-square bg-slate-200 p-2 rounded-full text-center hover:shadow-md transition-all hover:translate-y-1"><i class="fa-brands fa-apple"></i></a>
                    <a href="#" class="text-green-500 text-2xl w-[3rem] flex justify-center items-center aspect-square bg-slate-200 p-2 rounded-full text-center hover:shadow-md transition-all hover:translate-y-1"><i class="fa-brands fa-facebook"></i></a>
                </div>
            </form>
        </div>
    </section>
    <Footer></Footer>
</main>