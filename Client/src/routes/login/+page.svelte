<script>
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";

</script>

<main>
    <Navbar></Navbar>
    <section class="flex h-[100vh] flex-col items-center justify-center overflow-hidden bg-cover bg-no-repeat p-12" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/frontbg.png); background-position: center;">
        <div class="w-[70%] h-[70%] bg-white rounded-[2rem] flex flex-col justify-center items-center">
            <h1>Login</h1>
        </div>
    </section>
    <Footer></Footer>
</main>