declare class SllNode {
    data: number | string;
    next: SllNode;
    constructor(data: any);
    displayNodes(root: SllNode): void;
    insertNodesAtBeginning(root: SllNode, node: SllNode): SllNode;
}
declare function main(): void;
