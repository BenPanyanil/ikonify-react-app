import React from 'react';
import toitammeData from './data/toitammeData';

export const ToitammeContext = React.createContext(null);

export function ToitammeProvider({ children }) {
  return (
    <ToitammeContext.Provider value={toitammeData}>
      {children}
    </ToitammeContext.Provider>
  );
}
