
<script >
   export let data 
    const { products } = data
</script>
<div class="guides">
    <ul>
        {#each products as product}
            <li>
                <img width="100px" height="70px" alt={product.brand} src={'https://voyagersbeat.com/optimizer/img/'+product.PACKAGE_THUMBNAIL}/>
                <p>{product.PACKAGE_ID}/{product.PACKAGE_NAME}</p>
            </li>
        {/each}
    </ul>
</div>
<style>

</style>
