export interface IDndCustomer {
    DisplayName: string;
    JobNumber: string;
    Comment: string;
    Link: string;
    Suburb: string;
}

export class DndCustomer implements IDndCustomer {
    DisplayName: string;
    JobNumber: string;
    Comment: string;
    Link: string;
    Suburb: string;
    constructor(displayName: string, jobnumber: string, comment: string, link: string, suburb: string) {
        this.DisplayName = displayName;
        this.JobNumber = jobnumber;
        this.Comment = comment;
        this.Link = link;
        this.Suburb = suburb;
    }
}