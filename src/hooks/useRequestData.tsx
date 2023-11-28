import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";

type useRequestDataReturnType<T> = [T[], boolean, string];

export default function useRequestData<T>(request: () => Promise<AxiosResponse>, reload: boolean): useRequestDataReturnType<T> {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if(data.length > 1 && !reload) return;
        setLoading(true);
        request()
            .then((response: AxiosResponse) => {
                setData(response.data);
            })
            .catch((err: string) => setError(err))
            .finally(() => setLoading(false));
    }, [request, reload, data]);

    return [data, loading, error];
}
