import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import styles from "./Filters.module.css";

export default function filters() {
  return (
    <div className={styles.filters}>
      <Select className={styles.filter}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Filter By</SelectLabel>
            <SelectItem value="apple">Followers</SelectItem>
            <SelectItem value="banana">View</SelectItem>
            <SelectItem value="blueberry">Items sold</SelectItem>
            <SelectItem value="grapes">Enagement</SelectItem>
            <SelectItem value="pineapple">avg view</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select className={styles.filter}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Filter By</SelectLabel>
            <SelectItem value="apple">Followers</SelectItem>
            <SelectItem value="banana">View</SelectItem>
            <SelectItem value="blueberry">Items sold</SelectItem>
            <SelectItem value="grapes">Enagement</SelectItem>
            <SelectItem value="pineapple">avg view</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button variant="outline">Filter</Button>
    </div>
  );
}
