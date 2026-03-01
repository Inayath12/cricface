import React, { createContext, useContext, useState, useEffect } from 'react';

type Currency = 'INR' | 'USD' | 'EUR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (prices: { price_inr: number; price_usd: number; price_eur: number }) => string;
  symbol: string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>(() => {
    const saved = localStorage.getItem('cricface_currency');
    return (saved as Currency) || 'INR';
  });

  useEffect(() => {
    localStorage.setItem('cricface_currency', currency);
  }, [currency]);

  const symbols: Record<Currency, string> = {
    INR: '₹',
    USD: '$',
    EUR: '€',
  };

  const formatPrice = (prices: { price_inr: number; price_usd: number; price_eur: number }) => {
    const val = currency === 'INR' ? prices.price_inr : currency === 'USD' ? prices.price_usd : prices.price_eur;
    return `${symbols[currency]}${val.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, symbol: symbols[currency] }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error('useCurrency must be used within CurrencyProvider');
  return context;
};
