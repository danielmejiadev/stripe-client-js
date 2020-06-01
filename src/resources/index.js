// Resources
import { Products } from './products';
import { Plans } from './plans';
import { Customers } from './customers';
import { Suscriptions } from './suscriptions';
import { PaymentMethods } from './paymentMethods';
import { Invoices } from './invoices';
import { Tokens } from './tokens';
import { Coupons } from './coupons';
import { OAuth } from './oauth';
import { TaxRates } from './taxRates';

/**
 * The exported resources url of the stripe.
 */
const resources = {
  products: Products,
  plans: Plans,
  customers: Customers,
  suscriptions: Suscriptions,
  paymentMethods: PaymentMethods,
  invoices: Invoices,
  tokens: Tokens,
  coupons: Coupons,
  oauth: OAuth,
  taxRates: TaxRates,
};

export default resources;
