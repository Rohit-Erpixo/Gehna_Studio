from fastapi import APIRouter
from typing import List
from backend.app.schemas.credit import CreditPackage, UserCreditInfo

router = APIRouter()

PACKAGES = [
    CreditPackage(id="pkg_starter", name="Artisan Pack", credits=25, price_inr=499, popular=False, badge="Starter"),
    CreditPackage(id="pkg_pro", name="Jeweller Pro", credits=100, price_inr=1499, popular=True, badge="Most Popular"),
    CreditPackage(id="pkg_studio", name="Showroom Studio", credits=350, price_inr=3999, popular=False, badge="Best Value"),
    CreditPackage(id="pkg_enterprise", name="Luxury Chain", credits=1000, price_inr=8999, popular=False, badge="Enterprise"),
]

@router.get("/credits/packages", response_model=List[CreditPackage])
async def get_packages():
    return PACKAGES

@router.get("/credits/me", response_model=UserCreditInfo)
async def get_current_user_credits():
    """
    Returns the user's shop profile and credit status.
    Uses clearly marked development mock data for local initialization.
    """
    return UserCreditInfo(
        id="usr_shree_jewellers_01",
        shop_name="Shree Jewellers",
        owner_name="Rajesh Verma",
        phone="+91 98201 54321",
        credits=42,
        has_purchased=True,
        is_mock=True
    )
