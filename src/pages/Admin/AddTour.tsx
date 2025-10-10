import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { useGetDivisionsQuery } from "@/redux/features/division/division.api";
import { useGetTourTypesQuery } from "@/redux/features/tour/tour.api";

import { useForm } from "react-hook-form";

export default function AddTour() {
  // Fetching tour types and divisions data from the API
  const { data: tourData, isLoading: tourLoading } =
    useGetTourTypesQuery(undefined);
  const { data: divisionData, isLoading: divisionLoading } =
    useGetDivisionsQuery(undefined);

  console.log(tourData);

  // Transforming the fetched data into options for Select components
  const tourTypeOptions = tourData?.data.map(
    (tourType: { _id: string; name: string }) => ({
      value: tourType._id,
      label: tourType.name,
    })
  );
  const divisionOptions = divisionData?.map(
    (division: { _id: string; name: string }) => ({
      value: division._id,
      label: division.name,
    })
  );
  // --------------------------------

  // Initialize the form with default values
  const form = useForm({
    defaultValues: {
      title: "",
      division: "",
      tourType: "",
      description: "",
      location: "",
    },
  });
  // --------------------------------

  return (
    <div className="w-full max-w-4xl mx-auto px-5 mt-16">
      <Card>
        <CardHeader>
          <CardTitle>Add New Tour</CardTitle>
          <CardDescription>Add a new tour to the system</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form id="add-tour-form" className="space-y-5">
              {/* FormField for handle title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tour Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* -------------------------------- */}

              <div className="flex justify-between gap-5">
                {/* FormField for handle Tour Type */}
                <FormField
                  control={form.control}
                  name="tourType"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Tour Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        //disable select when loading
                        disabled={tourLoading}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a tour type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {/* Tour Type Options */}
                          {tourTypeOptions?.map(
                            (tourType: { value: string; label: string }) => (
                              <SelectItem
                                key={tourType.value}
                                value={tourType.value}
                              >
                                {tourType.label}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* -------------------------------- */}

                {/* FormField for handle Division */}
                <FormField
                  control={form.control}
                  name="division"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Division</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        //disable select when loading
                        disabled={divisionLoading}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a division" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {/* Division Options */}
                          {divisionOptions?.map(
                            (division: { value: string; label: string }) => (
                              <SelectItem
                                key={division.value}
                                value={division.value}
                              >
                                {division.label}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* -------------------------------- */}
              </div>

              {/* FormField for handle description */}
              <div className="flex gap-5 items-stretch">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} className="h-[205px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* -------------------------------- */}

              <div className="border-t border-muted w-full "></div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" form="add-tour-form">
            Create Tour
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
