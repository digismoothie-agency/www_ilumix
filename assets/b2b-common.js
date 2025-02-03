async function fetchB2bAppEndpoint(data) {
  const loader = document.createElement('div');
  loader.className = 'loader';
  loader.textContent = 'Loading...';
  document.body.appendChild(loader);

  data.myshopify_domain = window.Shopify.shop;
  const response = await fetch(window.digismoothieB2bApp.appUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": window.digismoothieB2bApp.lang,
    },
    body: JSON.stringify(data),
  });

  loader.remove();

  data = await response.json();

  return data;
}

async function deleteCompanyData(customerEmail) {
  const loader = document.createElement('div');
  loader.className = 'loader';
  document.body.appendChild(loader);

  await fetch(window.digismoothieB2bApp.appUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": window.digismoothieB2bApp.lang,
    },
    body: JSON.stringify({ email: customerEmail, myshopify_domain: window.Shopify.shop}),
  });

  loader.remove();
}