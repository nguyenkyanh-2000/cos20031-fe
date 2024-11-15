import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/modules/ui/tabs";
import { PlusCircle } from "lucide-react";
import { Button } from "@/modules/ui/button";
import useProductsNavigate from "@/modules/products/useProductsNavigate";

export default function Products() {
  const navigateToProducts = useProductsNavigate();
  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all" onClick={() => navigateToProducts({})}>
            All
          </TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            Archived
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all"></TabsContent>
    </Tabs>
  );
}
