<script lang="ts">
    import {isLoggedIn, currentUser} from "../lib/authStore";
    import '../app.css';
    import { writeBatch } from "firebase/firestore";

    let { children } = $props();
</script>

{@render children()}
