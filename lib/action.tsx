"use server";
export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instruction: formData.get("instruction"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
}
