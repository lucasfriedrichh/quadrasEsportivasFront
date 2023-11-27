import React, { useState, useRef, useEffect } from 'react';

interface EntradaSelectProps {
  texto: string;
  valor: string | string[];
  opcoes: string[]; 
  onChange?: (valor: string | string[]) => void;
}

export default function EntradaSelect(props: EntradaSelectProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col mt-3 relative">
      <label className="mb-2"> {props.texto} </label>
      <div className="relative inline-block text-left">
        <div>
          <span
            onClick={() => setDropdownVisible(!dropdownVisible)}
            className={`
              cursor-pointer border border-indigo-500 rounded-l g bg-gray-100 px-4 py-2
              focus:outline-none focus:bg-white
            `}
          >
            {Array.isArray(props.valor)
              ? props.valor.join(', ') || 'Selecione...'
              : props.valor || 'Selecione...'}
          </span>
        </div>
        {dropdownVisible && (
          <div
            ref={dropdownRef}
            className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1">
              {props.opcoes.map((opcao) => (
                <div
                  key={opcao}
                  onClick={() => {
                    props.onChange?.(opcao);
                    setDropdownVisible(false);
                  }}
                  className={`
                    cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900
                  `}
                >
                  {opcao}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
