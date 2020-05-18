# stripe-client
[NPM Package](https://www.npmjs.com/package/stripe-client-js)
An easy client to manage your stripe resources using [axios](https://github.com/axios/axios) under the hood.

## Getting started

- `yarn add stripe-client-js`
- `npm install stripe-client-js`

### Usage

First at all, initialize the package.

```js
import Stripe from 'stripe-client-js';

Stripe.initialize('yourApiUrl');
```

Use the resource wherever you want in the project.

```js
import Stripe from 'stripe-client-js';

Stripe.products.list()
  .then()
  .cath()
```

### Resources availables

| Resource         |
| -----------------|
| `products`       |
| `customers`      |
| `plans`          |
| `suscriptions`   |
| `paymentMethods` |
| `invoices` |

Every resources has a set of predefined resources
```js
Stripe.products.list();
Stripe.products.retrieve(resourceId);
Stripe.products.create(resource);
Stripe.products.update(resourceId, resource);
```

Every request receive a last param optional to customize the request.
```js
const requestParams = {
  params: {},
  url: 'if you want to override',
  ...extraAxiosParams,
};
```

### Extra Usage
NOTE: You can specific extra operations to the client.
```js
Stripe.addRequestInterceptor((request) => console.log(request));
Stripe.addResponseInterceptor((request) => console.log(request));
```

Under the hood we use axios to make the http request, you can customize the
axios instance.
```js
const myAxiosInstance = Stripe.axiosInstance
```

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
