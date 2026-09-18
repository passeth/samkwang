import { redirect } from "next/navigation";

export const metadata = { title: "제품 소개" };

export default function ManufacturersRedirect() {
	redirect("/products");
}
