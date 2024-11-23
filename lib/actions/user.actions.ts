"use server";
import { createAdminClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { ID, Query } from "node-appwrite";

const getUsersByEmail = async (email: string) => {
  const { database } = await createAdminClient();
  const result = await database.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("email", email)],
  );
  return result.total > 0 ? result.documents[0] : null;
};
const handleError = (error: unknown, message: string) => {
  console.log(error, message);
  throw error;
};
export const sendEmailOTP = async ({ email }: { email: string }) => {
  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailToken(ID.unique(), email);

    return session.userId;
  } catch (error) {
    handleError(error, "Failed to send email OTP");
  }
};
const creatAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  const existingUser = await getUsersByEmail(email);
  const accountId = await sendEmailOTP({ email });
};
