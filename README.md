# Personal Portfolio DApp

This project is a decentralized portfolio website built with a **Solidity smart contract** backend and a **React + Vite** frontend. The DApp is designed for multiple wallet integrations and is deployed on the **Avalanche Fuji Testnet**. It follows a sleek and modern theme, offering a platform for showcasing your education, projects, and work experience.

The DApp is hosted at **[https://ayashbera.surge.sh/](https://ayashbera.surge.sh/)**, and the portfolio section is yet to be hosted.

---

## **Table of Contents**
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)
   - Prerequisites
   - Backend Deployment
   - Frontend Setup
4. [Addresses and URLs](#addresses-and-urls)
5. [Smart Contract Interaction](#smart-contract-interaction)
6. [Contributing](#contributing)
7. [License](#license)

---

## **Features**
- **Decentralized Portfolio Management**: Store your portfolio details on the blockchain (education, projects, and work experience).
- **Multi-Wallet Support**: Compatible with multiple wallets like MetaMask.
- **Cool Theme**: Follows a modern and sleek design.
- **Avalanche Fuji Testnet Deployment**: Smart contract deployed on the Avalanche Fuji Testnet.
- **Dynamic Content**: Easily updateable details via the blockchain.

---

## **Technologies Used**
- **Frontend**: React + Vite
- **Backend**: Solidity (Smart Contracts)
- **Blockchain**: Avalanche Fuji Testnet
- **Hosting**: Surge (Backend)  
- **Wallets**: MetaMask (Primary Wallet)

---

## **Setup Instructions**

### **1. Prerequisites**
Ensure the following tools are installed:
- **Node.js**: Download from [Node.js official site](https://nodejs.org).
- **npm or yarn**: Comes bundled with Node.js.
- **MetaMask Wallet**: Install the MetaMask browser extension ([MetaMask](https://metamask.io)).
- **Avalanche Fuji Testnet Configuration**:
  - Network Name: `Avalanche Fuji Testnet`
  - RPC URL: `https://api.avax-test.network/ext/bc/C/rpc`
  - Chain ID: `43113`
  - Currency Symbol: `AVAX`
  - Explorer: [https://testnet.snowtrace.io/](https://testnet.snowtrace.io/)

---

### **2. Backend Deployment**

#### **Clone the repository:**
```bash
git clone <repository_url>
cd backend
```

#### **Install dependencies:**
```bash
npm install
```

#### **Configure the Smart Contract:**
- Update the contract details (if needed) in `Portfolio.sol`.
- Ensure the correct compiler version (defined in `truffle-config.js`).

#### **Deploy to Fuji Testnet:**
1. Configure your private key in `.env`:
   ```env
   PRIVATE_KEY=<your_private_key>
   INFURA_API_KEY=<infura_api_key>
   ```
2. Deploy the smart contract:
   ```bash
   truffle migrate --network fuji
   ```
3. Save the deployed contract address for frontend integration.

---

### **3. Frontend Setup**

#### **Navigate to the frontend folder:**
```bash
cd ../frontend
```

#### **Install dependencies:**
```bash
npm install
```

#### **Connect to the Smart Contract:**
- Update the contract address and ABI in `src/constants/contract.js`.

#### **Run the application:**
```bash
npm run dev
```

#### **Deploy the Frontend:**
1. Install Surge:
   ```bash
   npm install -g surge
   ```
2. Build the app:
   ```bash
   npm run build
   ```
3. Deploy:
   ```bash
   surge ./dist https://ayashbera.surge.sh
   ```

---

## **Addresses and URLs**

### **Smart Contract Address:**
- To be replaced with the deployed address.

### **Avalanche Fuji Testnet URLs:**
- RPC URL: `https://api.avax-test.network/ext/bc/C/rpc`
- Explorer: [https://testnet.snowtrace.io/](https://testnet.snowtrace.io/)

### **DApp URL:**
- [https://ayashbera.surge.sh/](https://ayashbera.surge.sh/)

---

## **Smart Contract Interaction**
Use the following methods to interact with the contract:
- **Add Project**: Adds a project to the portfolio.
- **Fetch All Projects**: Fetches all projects stored on the blockchain.
- **Update Profile**: Updates profile details like image, bio, etc.

All interactions can be performed via the frontend or directly using tools like **Remix** or **web3.js**.

---

## **Contributing**
Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

---

## **License**
This project is licensed under the MIT License.

---

Let me know if you'd like help customizing this further!
