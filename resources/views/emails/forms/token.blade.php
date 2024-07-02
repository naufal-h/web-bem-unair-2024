<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap" rel="stylesheet">
</head>
<body style="background-color: rgba(0, 0, 0, 0.1);padding: 2rem; font-family: 'Josefin Sans', sans-serif; ">
    <div style="background-color: rgb(248, 248, 248); padding: 1rem; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); border-radius: 1rem; max-width: 36rem; margin: auto;">

        <p>Halo, Ksatria Airlangga!</p>

        <p>Terima kasih telah menggunakan layanan pembuatan form dari BEM Universitas Airlangga.</p>


        <div style="background-color: rgba(232, 137, 69, 0.1); padding: 1rem; border-radius: .8rem;">
            <p style="margin: 0; margin-bottom: .5rem;">Token anda adalah</p>
            <h2 style="margin: 0; color: #E88A45;">{{ $form->token }}</h2>
        </div>

        <p>Silakan masukkan token tersebut untuk melakukan penyuntingan terhadap form anda.
            Layanan pengaduan dapat kamu sampaikan melalui Official Account BEM Unair di seluruh media sosial.
            Apabila terdapat kritik dan saran, silakan sampaikan melalui layanan yang sudah tersedia pada website.</p>

        <p>Terima kasih dan semoga pengalamanmu menyenangkan!</p>

        <p style="margin-bottom: 0">Salam hormat,<br>
            Admin Website BEM Universitas Airlangga</p>

    </div>
</body>
</html>
