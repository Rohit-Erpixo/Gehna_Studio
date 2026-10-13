from pydantic import BaseModel
from typing import List

class CreditPackage(BaseModel):
    id: str
    name: str
    credits: int
    price_inr: int
    popular: bool = False
    badge: str

class UserCreditInfo(BaseModel):
    id: str
    shop_name: str
    owner_name: str
    phone: str
    credits: int
    has_purchased: bool
    is_mock: bool = True
