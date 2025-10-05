import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
// import { toast } from "sonner";

interface AddDivisionModalProps {
  name: string;
  description?: string;
}

export function AddDivisionModal() {
  const form = useForm<AddDivisionModalProps>({
    defaultValues: {
      name: "",
      description: "",
    },
  });
  //   const [addDivision] = useAddTourTypeMutation();

  //   const onSubmit = async (data: AddDivisionModalProps) => {
  //     // const res = await addDivision({ name: data.name }).unwrap();
  //     if (res.success) {
  //       toast.success("Division Added");
  //     }
  //   };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Division</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Division</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            id="add-division"
            // onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Division Type</FormLabel>
                  <FormControl>
                    <Input placeholder="Division Type" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Division Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Division Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" form="add-division">
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
