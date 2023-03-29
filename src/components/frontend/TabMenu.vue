<template>
    <div class="home pt-4 ps-5">
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" 
            id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <router-link to="/" class="navbar-brand">
                    <img src="@/assets/BLA.png" alt="BLA" class="" width="120" height="50" />
                </router-link>
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">เมนูทั้งหมด</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="align-items-start">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                        aria-orientation="vertical">
                        <router-link to="/" class="text-decoration-none d-grid">
                            <button class="nav-link text-start active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                                type="button" role="tab" aria-controls="nav-home" aria-selected="true" auto-close="true">
                                ยกเลิกใบเสร็จ
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src

    export default {

    }
</script>
<style lang="css" >
    .offcanvas, .offcanvas-xxl, .offcanvas-xl, .offcanvas-lg, .offcanvas-md, .offcanvas-sm {
    --bs-offcanvas-width: 300px!important;
}
</style>



