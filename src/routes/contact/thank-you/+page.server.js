export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const textarea = data.get("textarea");
    return { email: email, textarea: textarea, success: true };
    //do stuff
  },
};
