import Head from 'next/head';

const CustomHead = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="eSports Team & Gaming HTML Template" />
      <meta name="author" content="Dan Fisher" />
      <meta name="keywords" content="esports team news HTML template" />
      {/* "html lang" özelliğini burada ekleyelim */}
      <html lang="zxx" />

      {/* Favicons */}
      <link rel="shortcut icon" href="/assets/img/favicons/favicon.ico" />
      <link rel="apple-touch-icon" sizes="120x120" href="/assets/img/favicons/favicon-120.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/assets/img/favicons/favicon-152.png" />

      {/* Google Web Fonts */}
      <link href="https://fonts.googleapis.com/css?family=Rajdhani:300,400,500,600,700" rel="stylesheet" />

      {/* CSS */}
      {/* Vendor CSS */}
      <link href="/assets/vendor/magnific-popup/css/magnific-popup.css" rel="stylesheet" />
      <link href="/assets/vendor/slick/css/slick.css" rel="stylesheet" />
      <link href="/assets/vendor/nanoscroller/css/nanoscroller.css" rel="stylesheet" />
      <link href="/assets/vendor/fontawesome/css/brands.css" rel="stylesheet" />

      {/* Template CSS */}
      <link href="/assets/css/style.css" rel="stylesheet" />

      {/* Custom CSS */}
      <link href="/assets/css/custom.css" rel="stylesheet" />
    </Head>
  );
};

export default Head;
