import { Tag} from './tag.model';

export class Announcement{
	public id : number;
	public title : string;
	public description : string;
	public tags : Tag[];
	public cathegory : string;
	public quarters : number[];
	public likes : number;
	public dislikes : number;

	public static extractTags(tags : Tag[]){
		let retval = [];
		for(let t of tags)
			retval.push(t.name);
		return retval;
	}

	public constructor(ann : Announcement){
		if(ann!= null){
			this.id = ann.id;
			this.title = ann.title;
			this.description = ann.description;
			this.tags = ann.tags;
			this.cathegory = ann.cathegory;
			this.quarters = ann.quarters;
	}
	}

}