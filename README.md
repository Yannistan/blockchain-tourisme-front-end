# B×Travel

## Decentralized travel agency

_Front-end repository_

<hr/>

#### If you need to modify SCSS files please install `Live SASS Compiler` (VSC extension) and run `Watch SASS` to compile.

#### Packages used :

- "bootstrap": "^5.0.0-alpha3",
- "react-router-dom": "^5.2.0",
- "@react-hook/window-size": "^3.0.7",

#### Run `yarn` to install dependencies

<hr/>

####    Initialisation of React Project

% npx create-react-app tourisme-front-end

#### Installation of ethers.js library

% npm install --save ethers

#### Project architecture :

```
src
└── index.js
    └── <Web3Provider>
        ├── <App.js />
        ├── <TourismeContext.Provider>
            └── <Dapp />
                ├── <Router>
                    ├── <DestinationContextProvider>
                        ├── <Header />
                        ├── <Home />
                            ├── <Welcome />
                            └── <Register />
                        ├── <Reservation />
                        └── <Travels />
                    ├── </DestinationContextProvider>
                    └── </Footer>
                └── </Router>
        └── </TourismeContext.Provider>
    └── </Web3Provider>

```
