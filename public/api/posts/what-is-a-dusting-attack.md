Recently I learned about a new type of crypto scam/phishing attack called a dusting attack.  This attack seems pretty harmless at first, but it could lead to an attacker learning your identity if not taken care of properly.

## So what is a dusting attack exactly?

A dusting attack occurs when a malicious attacker sends a user a very tiny amount of cryptocurrency (ex: a few satoshis of BTC).  The amount is generally small enough that the user may not even realize they received anything, unless they are paying careful attention.

## Why would someone give me a small amount of crypto (dust)?

There are a couple different reasons why someone would send you a small amound of crypto (aka dust).

* **Promotion/Spam** - Some coins like XLM allow a memo field.  Within this memo field, they may put in text or a link to promote a website or exchange.  It is **not** recommended to click this link.
* **Uncovering the identity of a wallet** -  After a victim has received the dust, they may unknowingly spend it.  The attacker will track these dust funds from multiple addresses and through some complex analytics, they could deanonymize the wallet owner.

A dust attack **does not** give an attacker access to your funds.

## How could they uncover my identity through dusting?

If someone sends you a small amount of crypto, which you later spend, it still doesn't really follow that they could uncover your identity.  What does someone sending you a small amount of money do exactly?  

Well to figure that out, we first need to learn a bit more about how exactly bitcoin wallets work.  It turns out, that a single wallet can have multiple addresses.  This helps to keep a wallet own more anonymous as it makes it hard for others to see how much BTC you have received, since the crypto could be going to different public addresses each time.

Now the next time you go to spend your funds, your wallet (in some scenarios) will combine the funds from multiple addresses, and use them for one transaction.  The attacker can analyze the blockchain and track their "dust".  Through this analysis they can combine the addresses into one identity and potentially use other sources (like an exchange) to gather information on the wallet owner.  A great resource for more details about this type of attack is [here](https://support.exodus.com/article/1231-what-is-a-dust-attack-and-how-to-mitigate-it)
