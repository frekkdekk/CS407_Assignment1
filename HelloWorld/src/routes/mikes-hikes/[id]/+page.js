import { supabase } from "$lib/supabase";

export const load = async ({ params }) => {
    const id = params.id;

    const { data, error } = await supabase
        .from('hikes')
        .select('*, images(image_path, caption)')
        .eq('id', id)
        .single();

    if (error) {
        console.error("Error fetching hike:", error);
        throw new Error("Failed to fetch hike");
        
    }
    return {
            hike: data
    }
}