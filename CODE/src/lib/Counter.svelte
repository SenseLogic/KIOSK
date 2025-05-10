<script>
    let count = $state( 0 );

    const increment = () =>
    {
        count += 1;
    };
</script>

<style lang="stylus">
    // -- IMPORTS

    @import '../constant.styl';

    // -- CLASSES

    .counter
    {
        padding: 0.5rem 1rem;
        background-color: blueColor700;
        border-radius: 0.5rem;
    }
</style>

<button class="counter" onclick={increment}>
    count is {count}
</button>
