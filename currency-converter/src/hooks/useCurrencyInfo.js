import { useEffect, useState } from 'react';

function useCurrencyData(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const primaryUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        const fallbackUrl = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;

        const fetchData = async () => {
            try {
                // Try the primary URL first
                let response = await fetch(primaryUrl);
                if (!response.ok) throw new Error('Primary URL failed'); // Check if response is OK
                let result = await response.json();
                setData(result[currency]);
            } catch (error) {
                console.error('Primary URL failed, trying fallback:', error);
                try {
                    // If primary fails, try the fallback URL
                    let response = await fetch(fallbackUrl);
                    if (!response.ok) throw new Error('Fallback URL failed'); // Check if response is OK
                    let result = await response.json();
                    setData(result[currency]);
                } catch (fallbackError) {
                    console.error('Fallback URL also failed:', fallbackError);
                    setData({}); // Handle the case where both URLs fail
                }
            }
        };

        fetchData();
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyData;