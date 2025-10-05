import { useGetTourTypesQuery } from "@/redux/features/tour/tour.api";

export default function AddTourType() {
  const { data } = useGetTourTypesQuery(undefined);
  console.log(data);
  return <h1>This is AddTourType component</h1>;
}
