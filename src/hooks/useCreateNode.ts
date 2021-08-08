export const createNode = (nodeId: string):HTMLElement => {
    const nodeInstance = document.createElement("div");
    nodeInstance.id = nodeId;
    document.body.appendChild(nodeInstance);
    return nodeInstance;
}