<div class="footer-section">
    <div class="footer-content">
        <img class="footer-logo" src="{{ asset('images/logo/primary_logo_white1.png') }}" alt="Logo">
    </div>
    <div class="vector">
        <img src="{{ asset('images/Vector.svg') }}" alt="">
    </div>
</div>


<style>
    .footer-section {
        background-color: #4AA2FF;
        width: 100%;
        /* height: 400px; */
        position: relative;
        bottom: 0;
        /* max-height: 500px; */
    }
.vector{
    width: 100%;
    position: relative;
}

    .vector img{
        width: 100%;
        position: relative;
        /* bottom: 0; */
    }

    .footer-content{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    /* @media (min-width: 1180px) {
        .footer-section{
            height: 441px;
        }
    } */
</style>
