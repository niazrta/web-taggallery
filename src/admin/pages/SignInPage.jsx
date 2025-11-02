import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center py-20">
      <SignIn path="/sign-in" signUpUrl="/sign-up" afterSignInUrl="/admin" />
    </div>
  );
}