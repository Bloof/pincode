## Pincode tehtävä

Sovellus on alustettu create react apilllä
```
npx create-react-app pincode --template redux-typescript
```

Otin sovellukseen myös sagat mukaan niin arkkitehtuurin saa hiukan selvemmäks mikäli haluttaisiin back-end mukaan myös. Api-kerros olisi yhteydesä backendiin

Lukon tila on ainut mikä on redux storessa sillä en nähnyt järkeä kierrättää itse pinkoodia reduxin kautta, kun reactin oma state hoitaa sen tässä tapauksessa paljon järkevämmin.

Jätin tällä kertaa tyyli tiedostot kokonaan pois projektista sillä niihin saa uppoamaan aivan liikaa aikaa.

Asennus:
```
npm install
```


Käynnistys:
```
npm run start
```

Sovellus käynnistyy osoitteeseen localhost:3000 ja lukon pinkoodi on 2021