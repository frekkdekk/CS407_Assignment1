import { supabase } from "$lib/supabase";

export const load = async () => {
    const { data, error } = await supabase
        .from("hikes")
        .select("*");

    if (error) {
        console.error("Error fetching hikes:", error);
        return [];   
    }

    return {
        props: {
            hikes: data
        }
    }
}
