import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center py-20">
      <SignUp path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
}