"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let GroupsService = class GroupsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getAllGroup() {
        return this.prisma.tbl_group.findMany({
            include: {
                tbl_user_group: {
                    select: {
                        user: true
                    }
                }
            }
        });
    }
    getDetailGroup(groupId) {
        return this.prisma.tbl_group.findFirst({ where: { groupId } });
    }
    createGroup(groupDTO) {
        return this.prisma.tbl_group.create({
            data: groupDTO
        });
    }
    updateGroup(groupId, groupDTO) {
        return this.prisma.tbl_group.update({
            where: { groupId },
            data: groupDTO,
        });
    }
    deleteGroup(groupId) {
        return this.prisma.tbl_group.delete({ where: { groupId } });
    }
};
exports.GroupsService = GroupsService;
exports.GroupsService = GroupsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GroupsService);
//# sourceMappingURL=groups.service.js.map