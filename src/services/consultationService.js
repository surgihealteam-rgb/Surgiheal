import { validateFormData } from "../utils/security";
import { supabase } from "./supabaseClient"; // Make sure this path is correct

export const consultationService = {
  async createConsultation(consultationData) {
    try {
      // Define required fields
      const requiredFields = ["name", "phone", "city", "disease", "age"];

      // Validate
      const { errors, validatedData } = validateFormData(
        consultationData,
        requiredFields
      );

      if (Object.keys(errors).length > 0) {
        throw {
          status: 400,
          message: "Validation failed",
          errors,
        };
      }

      // ✅ Match your Supabase table columns
      const payload = {
        name: validatedData.name,
        phone: validatedData.phone,
        age: validatedData.age,
        city: validatedData.city,
        condition: validatedData.disease, // must match your DB column name
      };

      // ✅ Insert into Supabase
      const { data, error } = await supabase
        .from("Surgiheal_appointments")
        .insert([payload])
        .select();

      if (error) {
        console.error("[consultationService] Insert error:", error);
        throw error;
      }

      return {
        success: true,
        message: "Consultation booked successfully!",
        data,
      };
    } catch (error) {
      console.error("[consultationService] API error:", error);

      if (error.status) throw error;

      throw {
        status: 500,
        message: error.message || "Something went wrong with Supabase insert.",
        errors: {},
      };
    }
  },
};
